import { Event } from "./event";
import { Datetime } from "@ionic/angular";

export class Day {
    name: string;
    number: number;
    month: string;
    year: number;
    date: Datetime;

    event: Event
}
