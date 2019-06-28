import {Component, OnInit} from '@angular/core';
import {TouristService} from "../service/tourist.service";
import {Tourist} from "../model/tourist";
import {MatSnackBar} from "@angular/material";
import {Flight} from "../model/flight";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../service/country.service";
import {FlightService} from "../service/flight.service";

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TouristComponent implements OnInit {
  touristColumns: string[] = ['firstName', 'lastName', 'gender', 'dayOfBirth', 'country', 'deleteButton'];
  flightColumns: string[] = ['departureDateTime', 'arrivalDateTime', 'numberOfSeats', 'ticketPrice', 'deleteButton'];
  addFlightColumns: string[] = ['departureDateTime', 'arrivalDateTime', 'numberOfSeats', 'ticketPrice', 'addFlightButton'];

  dataSource: Tourist[];
  expandedElement: Flight;
  private tourists: Tourist[];

  allFlights: Flight[];
  isAllFlightsTableHidden: boolean = true;

  pageSizeOptions = [1, 5, 10, 20, 50];
  pageIndex: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;
  isFormHidden: boolean = true;
  newTouristForm: FormGroup;
  genders: string[] = ['MALE', 'FEMALE'];
  private newTourist: Tourist = new Tourist();

  constructor(private touristService: TouristService,
              private formBuilder: FormBuilder,
              private countryService: CountryService,
              private flightService: FlightService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getTourists();
    this.newTouristForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      dayOfBirth: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      country: ['', [
        Validators.required
      ]],
      remarks: ['', []],
    });
    this.newTouristForm.valueChanges.subscribe(form => {
      this.newTourist.firstName = form.firstName;
      this.newTourist.lastName = form.lastName;
      this.newTourist.dayOfBirth = form.dayOfBirth;
      this.newTourist.gender = form.gender;
      this.newTourist.country = form.country;
      this.newTourist.remarks = form.remarks;
    });
  }

  getTourists() {
    this.touristService.getAllTouristsByPage(this.pageIndex, this.pageSize).subscribe(response => {
      this.totalElements = response.totalElements;
      this.tourists = response.content;
      this.dataSource = [...this.tourists]
    });
  }


  changePage(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getTourists();
  }

  addTouristClicked() {
    if (this.isFormHidden == true) {
      this.isFormHidden = false;
    } else {
      this.addTourist();
    }
  }

  deleteTourist(tourist: Tourist) {
    this.touristService.deleteTourist(tourist.id).subscribe(() => {
      this.getTourists();
      this.openSnackBar("Tourist deleted")
    })
  }

  addTourist() {
    this.touristService.addTourist(this.newTourist).subscribe(response => {
      if (this.pageIndex == Math.floor(Math.floor(this.totalElements / this.pageSize))) {
        this.tourists.push(response);
        this.dataSource = [...this.tourists];
      }
      this.totalElements++;
      this.isFormHidden = true;
      this.newTouristForm.reset();
      this.openSnackBar("New tourist added");

    })
  }

  addFlightButtonClicked() {
    if (this.isAllFlightsTableHidden == true) {
      this.isAllFlightsTableHidden = false;
      this.flightService.getAllFlights().subscribe(response => {
        this.allFlights = response;
        this.isAllFlightsTableHidden = false;
      })
    } else {
      this.isAllFlightsTableHidden = true;
    }
  }

  removeTouristFromFlight(tourist: Tourist, flight: Flight) {
    this.flightService.removeTouristFromFlight(tourist.id, flight.id).subscribe(() => {
      const index = tourist.flights.indexOf(flight);
      tourist.flights.splice(index, 1);
      this.tourists.find(t => t == tourist).flights = [...tourist.flights];
      this.openSnackBar("Tourist removed from the flight")
    });
  }

  addTouristToFlight(tourist: Tourist, flight: Flight) {
    if (flight.seatsTaken == flight.numberOfSeats) {
      window.alert('All seats on this flight are already taken');
    } else if (this.includesTourist(tourist, flight)) {
      window.alert('Tourist is already on this flight');
    } else {
      this.flightService.addTouristToFlight(tourist.id, flight.id).subscribe(() => {
        flight.seatsTaken = flight.seatsTaken + 1;
        tourist.flights.push(flight);
        this.tourists.find(t => t == tourist).flights = [...tourist.flights];
        this.isAllFlightsTableHidden = true;
        this.openSnackBar("Tourist added to the flight")
      })
    }
  }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, "", {
      duration: 2000,
    });
  }

  includesTourist(tourist: Tourist, flight: Flight) {
    const found = tourist.flights.find(f => f.id == flight.id);
    return found != undefined;
  }

  get firstName() {
    return this.newTouristForm.get('firstName')
  }

  get lastName() {
    return this.newTouristForm.get('lastName')
  }

  get gender() {
    return this.newTouristForm.get('gender')
  }

  get dayOfBirth() {
    return this.newTouristForm.get('dayOfBirth')
  }

  get country() {
    return this.newTouristForm.get('country')
  }

  get remarks() {
    return this.newTouristForm.get('remarks')
  }
}
