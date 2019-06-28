import {Component, OnInit} from '@angular/core';
import {Tourist} from "../model/tourist";
import {Flight} from "../model/flight";
import {FlightService} from "../service/flight.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {Observable, Subject} from "rxjs";
import {TouristService} from "../service/tourist.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FlightComponent implements OnInit {

  flightColumns: string[] = ['departureDateTime', 'arrivalDateTime', 'numberOfSeats', 'ticketPrice', 'deleteButton'];
  touristColumns: string[] = ['firstName', 'lastName', 'gender', 'dayOfBirth', 'country', 'removeButton'];
  expandedElement: Flight;
  private flights: Flight[];
  private dataSource: Flight[];

  newFlightForm: FormGroup;
  private newFlight: Flight = new Flight();
  private isFormHidden: boolean = true;

  pageSizeOptions = [1, 5, 10, 20, 50];
  pageIndex: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  touristsSearch$: Observable<any>;
  private searchTerms = new Subject<string>();


  constructor(private flightService: FlightService,
              private formBuilder: FormBuilder,
              private touristService: TouristService,
              private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    this.getFlights();
    this.newFlightForm = this.formBuilder.group({
      departureDateTime: ['', [
        Validators.required
      ]],
      arrivalDateTime: ['', [
        Validators.required
      ]],
      numberOfSeats: ['', [
        Validators.required
      ]],
      ticketPrice: ['', [
        Validators.required
      ]],
    });
    this.newFlightForm.valueChanges.subscribe(form => {
      this.newFlight.departureDateTime = form.departureDateTime;
      this.newFlight.arrivalDateTime = form.arrivalDateTime;
      this.newFlight.numberOfSeats = form.numberOfSeats;
      this.newFlight.ticketPrice = form.ticketPrice;
    });

    this.touristsSearch$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.touristService.search(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchFocusOut() {
    this.search('')
  }

  getFlights() {
    this.flightService.getAllFlightsByPage(this.pageIndex, this.pageSize).subscribe(response => {
      this.totalElements = response.totalElements;
      this.flights = response.content;
      this.dataSource = [...this.flights]
    });
  }

  addFlightClicked() {
    if (this.isFormHidden == true) {
      this.isFormHidden = false;
    } else {
      this.addFlight();
    }
  }

  addFlight() {
    this.flightService.addFlight(this.newFlight).subscribe(response => {
      if (this.pageIndex == Math.floor(Math.floor(this.totalElements / this.pageSize))) {
        this.flights.push(response);
        this.dataSource = [...this.flights];
      }
      this.totalElements++;
      this.isFormHidden = true;
      this.newFlightForm.reset();
      this.openSnackBar('New flight added')
    })
  }

  deleteFlight(flight: Flight) {
    this.flightService.deleteFlight(flight.id).subscribe(() => {
      this.getFlights();
      this.openSnackBar('Flight deleted')
    })
  }

  removeTouristFormFlight(tourist: Tourist, flight: Flight) {
    this.flightService.removeTouristFromFlight(tourist.id, flight.id).subscribe(() => {
      const index = flight.tourists.indexOf(tourist);
      flight.tourists.splice(index, 1);
      this.flights.find(f => f == flight).tourists = [...flight.tourists];
      this.openSnackBar('Tourist removed from the flight')
    });
  }

  addTouristToFlight(tourist: Tourist, flight: Flight) {
    if (flight.tourists.length == flight.numberOfSeats) {
      window.alert('All seats on this flight are already taken');
    } else if (this.includesTourist(tourist, flight)) {
      window.alert('Chosen tourist already is on this flight');
    } else {
      this.flightService.addTouristToFlight(tourist.id, flight.id).subscribe(() => {
        flight.tourists.push(tourist);
        this.flights.find(f => f == flight).tourists = [...flight.tourists];
        this.searchTerms.next('');
        this.openSnackBar('Tourist added to the flight')
      })
    }
  }

  includesTourist(tourist: Tourist, flight: Flight) {
    const found = flight.tourists.find(t => t.id == tourist.id);
    return found != undefined;
  }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, "", {
      duration: 2000,
    });
  }

  changePage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getFlights();
  }

  get departureDateTime() {
    return this.newFlightForm.get('departureDateTime')
  }

  get arrivalDateTime() {
    return this.newFlightForm.get('arrivalDateTime')
  }

  get numberOfSeats() {
    return this.newFlightForm.get('numberOfSeats')
  }

  get ticketPrice() {
    return this.newFlightForm.get('ticketPrice')
  }

}
