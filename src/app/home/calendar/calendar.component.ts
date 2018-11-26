import { Component, OnInit } from '@angular/core';
import { Day } from '../../models/day';
import { Event } from '../../models/event';
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
  selectedDay: Day;
  dday;

  constructor(private eventsApiService : EventsApiService) { }

  getEvents(): void {
    this.eventsApiService.getEvents() 
      .subscribe((events) => { 
        this.events = events.rows;
        console.log(this.events);
        // ajouter le chargement des events dans le calendar
        for (let event of this.events) {
          if (event.doc.start_time && 
              moment(event.doc.start_time).format('YYYYMM') == moment(this.dday).format('YYYYMM')) {
//              if (event.doc.start_time.getMonth() == this.dday.getMonth())
            console.log(moment(event.doc.start_time).format('YYYYMMDD'));
            for (let sem of this.calendar) {
              for (let jour of sem) {
                if (moment(event.doc.start_time).format('YYYYMMDD') == moment(jour.caldate).format('YYYYMMDD')) {
                    jour.event = event.doc;
                    console.log(moment(event.doc.start_time).format('YYYYMMDD'),moment(jour.caldate).format('YYYYMMDD') ) ;
                }
                  
              }
            }
          }
        }

        console.log(this.calendar);


      });
  }
  
  chargeEvents(): void {

  }

  

  ngOnInit() {
    //var moment = require('moment');
    moment.locale('fr');
    var dday = new Date();
    var week = [];
    var iday, dayAdd;
    var daySubtract = parseInt(moment().format('Do')) - 1;
    var dayOfWeekFirstDayOfMonth = moment().subtract(daySubtract, 'days').days();
    if (dayOfWeekFirstDayOfMonth > 0) {
        daySubtract = daySubtract + ( dayOfWeekFirstDayOfMonth - 1 ) ;
    } else {
      daySubtract = daySubtract + 6 ;
    }

    // from end last month to yesterday
    while ( daySubtract > 0 ) {
      week = [];
      for ( iday = 0; iday < 7; iday ++) {
        week.push(
          {
            caldate: moment().subtract(daySubtract, 'days').format(),
            caldateFrench: moment().subtract(daySubtract, 'days').format('LLLL'),
            caldaynumber: moment().subtract(daySubtract, 'days').format('Do'),
            currentmonth: (moment().format('MMMM') == moment().subtract(daySubtract, 'days').format('MMMM'))
          }
        );
        daySubtract --;
      }
      this.calendar.push(week);
    }

    // from today to end month

    dayAdd = 0 - daySubtract;
    var currentMonth = true;
    while (currentMonth) {
      week = [];
      for ( iday = 0; iday < 7; iday ++) {
        currentMonth = (moment().format('MMMM') == moment().add(dayAdd, 'days').format('MMMM'));
        week.push(
          {
            caldate: moment().add(dayAdd, 'days').format(),
            caldateFrench: moment().add(dayAdd, 'days').format('LLLL'),
            caldaynumber: moment().add(dayAdd, 'days').format('Do'),
            currentmonth: currentMonth
          }
        );
        dayAdd ++;
      }
      this.calendar.push(week);
    }

    console.log(this.calendar);
    this.getEvents();
  }

  onSelect(jour: Day): void {
    this.selectedDay = jour;
  }

}
