import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Event } from './models/event';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {
  private eventsUrl: string = "http://ig73.alwaysdata.net/data/ig73_papet/_all_docs?include_docs=true";//adresse base de données sur alwaysdata


  constructor(private http: HttpClient) {
    console.log("Hello EventsApiService");
  }

  public getEvents(): Observable<any> {
//    return this.http.get<any>(`${this.eventsUrl}`);
    return this.http.get<any>(this.eventsUrl);

  }
  
  
}
