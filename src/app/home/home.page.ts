import { Component } from '@angular/core';
import { Day } from '../models/day';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  semaine = [1,2,3,4,5,6,7];
  mois = [[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28]];
  week1 = [1,2,3,4,5,6,7];
  week2 = [8,9,10,11,12,13,14];
  week3 = [15,16,17,18,19,20,21];
  week4 = [22,23,24,25,26,27,28];
  calendar = [
    [
      {name: 'lundi',
       number: 29,
       month: 'octobre' },

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
    ],

    [
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
    ],

    [
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
    ],

    [
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
    ],

    [
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
    ]
  ];

  selectedDay: Day;
  onSelect(jour: Day): void {
    this.selectedDay = jour;
  }

  // ionViewDidLoad() {  
  //   this.calendar.push(this.week1);
  //   this.calendar.push(this.week2);
  //   this.calendar.push(this.week3);
  //   this.calendar.push(this.week4);

  // }
}
