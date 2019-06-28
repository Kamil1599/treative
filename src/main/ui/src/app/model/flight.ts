import {Tourist} from "./tourist";
import DateTimeFormat = Intl.DateTimeFormat;

export class Flight {

  id: number;
  departureDateTime: DateTimeFormat;
  arrivalDateTime: DateTimeFormat;
  numberOfSeats: number;
  ticketPrice: number;
  tourists: Tourist[];
  seatsTaken: number;
}
