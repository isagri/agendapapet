import { Component, OnInit } from '@angular/core';
import { EventsApiService } from '../../eventsApi.service';
import { Datetime } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  events: any[];
  calendar = [];
  displayedYear: number;
  displayedMonth: number;
  displayedFrenchMonth;
  selectedDay;
  dday;

  constructor(private eventsApiService : EventsApiService) { }

  ngOnInit() {
    moment.locale('fr');

    this.dday = moment();
    this.displayedYear = parseInt(moment().format('YYYY'));
    this.displayedMonth = parseInt(moment().format('MM'));
    this.chargeCalendar();
    console.log(this.calendar);
    this.getEvents();
  }

  chargeCalendar() {

    this.calendar = [];

    var firstDayOfMonth = String(this.displayedYear) + String(this.displayedMonth) + '01';
    if (this.displayedMonth < 10) {
      firstDayOfMonth = String(this.displayedYear) + '0' + String(this.displayedMonth) + '01';
    }
    this.displayedFrenchMonth = moment(firstDayOfMonth).format('MMMM YYYY');
    console.log(firstDayOfMonth);

    var dayOfWeekFirstDayOfMonth = moment(firstDayOfMonth,"YYYYMMDD").days();
    if (dayOfWeekFirstDayOfMonth > 0) {
      dayOfWeekFirstDayOfMonth = dayOfWeekFirstDayOfMonth - 1;
    } else {
      dayOfWeekFirstDayOfMonth = 6;
    }
    console.log(dayOfWeekFirstDayOfMonth);

    var firstDayOfCalendar = moment(firstDayOfMonth, "YYYYMMDD").subtract(dayOfWeekFirstDayOfMonth,'days');
    console.log(moment(firstDayOfCalendar).format('YYYYMMDD'));

    var day = moment(firstDayOfCalendar);
    var week = [];
    var iday: number;
    var currentMonth = true;
    while (currentMonth) {
      week = [];
      for ( iday = 0; iday < 7; iday ++) {
        week.push(
          {
            caldate: day,
            caldateFrench: moment(day).format('dddd Do MMMM YYYY'),
            caldaynumber: moment(day).format('Do'),
            currentmonth: (moment(firstDayOfMonth, 'YYYYMMDD').format('MMMM') == moment(day).format('MMMM'))
          }
        );
        day = moment(day).add(1, 'days')
        currentMonth = (moment(firstDayOfMonth, 'YYYYMMDD').format('MMMM') == moment(day).format('MMMM'));
      }
      this.calendar.push(week);
    }
  }

  getEvents(): void {
    this.eventsApiService.getEvents() 
      .subscribe((events) => { 
        this.events = events.rows;
        console.log(this.events);
        // ajouter le chargement des events dans le calendar
        
        this.chargeEventsCalendar();
        console.log(this.calendar);


      });
  }
  
  chargeEventsCalendar(): void {
    for (let event of this.events) {
      if (event.doc.start_time && 
          moment(event.doc.start_time).format('YYYYMM') == moment(this.dday).format('YYYYMM')) {
//              if (event.doc.start_time.getMonth() == this.dday.getMonth())
        console.log(moment(event.doc.start_time).format('YYYYMMDD'));
        for (let sem of this.calendar) {
          for (let jour of sem) {
            if (moment(event.doc.start_time).format('YYYYMMDD') == moment(jour.caldate).format('YYYYMMDD')) {
                jour.event = event.doc;
                jour.event.time = moment(jour.event.start_time).format('h:mm a');
                console.log(moment(event.doc.start_time).format('YYYYMMDD'),moment(jour.caldate).format('YYYYMMDD') ) ;
            }
              
          }
        }
      }
    }
  }

 
  prevMonth() {
    if (this.displayedMonth > 1) {
      this.displayedMonth--;
    } else {
      this.displayedMonth = 12;
      this.displayedYear--;
    }
    this.chargeCalendar();
    console.log(this.calendar);
    this.getEvents();
  }

  nextMonth() {
    if (this.displayedMonth < 12) {
      this.displayedMonth++;
    } else {
      this.displayedMonth = 1;
      this.displayedYear++;
    }
    this.chargeCalendar();
    console.log(this.calendar);
    this.getEvents();
  }

  onSelect(jour: any): void {
    this.selectedDay = jour;
  }

}
