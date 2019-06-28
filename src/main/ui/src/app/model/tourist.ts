import {Gender} from "./gender";
import {Flight} from "./flight";
import DateTimeFormat = Intl.DateTimeFormat;

export class Tourist {

  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  country: string;
  remarks: string;
  dayOfBirth: DateTimeFormat;
  flights: Flight[];
}
