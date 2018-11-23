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

  events: Event[];
  calendar = [];
  selectedDay: Day;

  constructor(private eventsApiService : EventsApiService) { }

  getEvents(): void {
    this.eventsApiService.getEvents() 
      .subscribe((events) => { 
        this.events = events.rows;
        console.log(this.events);
    });
  }
  

  

  ngOnInit() {
    //var moment = require('moment');
    moment.locale('fr');

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


/*
    this.calendar.push([
      {name: 'lundi',
       number: 29,
       month: 'octobre',
       },

       {name: 'mardi',
       number: 30,
       month: 'octobre' },

       {name: 'mercredi',
       number: 31,
       month: 'octobre' },

       {name: 'jeudi',
       number: 1,
       month: 'novembre' },

       {name: 'vendredi',
       number: 2,
       month: 'novembre' },

       {name: 'samedi',
       number: 3,
       month: 'novembre' },

       {name: 'dimanche',
       number: 4,
       month: 'novembre' }
    ]);
    this.calendar.push([
      {name: 'lundi',
       number: 5,
       month: 'novembre' },

       {name: 'mardi',
       number: 6,
       month: 'novembre' },

       {name: 'mercredi',
       number: 7,
       month: 'novembre' },

       {name: 'jeudi',
       number: 8,
       month: 'novembre' },

       {name: 'vendredi',
       number: 9,
       month: 'novembre' },

       {name: 'samedi',
       number: 10,
       month: 'novembre' },

       {name: 'dimanche',
       number: 11,
       month: 'novembre' }
    ]);

    this.calendar.push([
      {name: 'lundi',
       number: 12,
       month: 'novembre' },

       {name: 'mardi',
       number: 13,
       month: 'novembre' },

       {name: 'mercredi',
       number: 14,
       month: 'novembre' },

       {name: 'jeudi',
       number: 15,
       month: 'novembre' },

       {name: 'vendredi',
       number: 16,
       month: 'novembre' },

       {name: 'samedi',
       number: 17,
       month: 'novembre' },

       {name: 'dimanche',
       number: 18,
       month: 'novembre' }
    ]);

    this.calendar.push([
      {name: 'lundi',
       number: 19,
       month: 'novembre',
       event: {
         title: 'coder dojo',
         location: 'Centre Ressources',
         description: 'Formation à la programmation pour adolescents',
         }
      },

       {name: 'mardi',
       number: 20,
       month: 'novembre' },

       {name: 'mercredi',
       number: 21,
       month: 'novembre' },

       {name: 'jeudi',
       number: 22,
       month: 'novembre' },

       {name: 'vendredi',
       number: 23,
       month: 'novembre' },

       {name: 'samedi',
       number: 24,
       month: 'novembre' },

       {name: 'dimanche',
       number: 25,
       month: 'novembre' }
    ]);

    this.calendar.push([
      {name: 'lundi',
       number: 26,
       month: 'novembre' },

       {name: 'mardi',
       number: 27,
       month: 'novembre' },

       {name: 'mercredi',
       number: 28,
       month: 'novembre' },

       {name: 'jeudi',
       number: 29,
       month: 'novembre' },

       {name: 'vendredi',
       number: 30,
       month: 'novembre' },

       {name: 'samedi',
       number: 1,
       month: 'decembre' },

       {name: 'dimanche',
       number: 2,
       month: 'decembre' }
    ]);
*/
    console.log(this.calendar);
    this.getEvents();
    console.log(this.events);
  }

  onSelect(jour: Day): void {
    this.selectedDay = jour;
  }

}
