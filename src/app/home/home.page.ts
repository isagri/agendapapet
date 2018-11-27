import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  
  selectedDay;
  onSelect(jour: any): void {
    this.selectedDay = jour;
  }

  // ionViewDidLoad() {  
  //   this.calendar.push(this.week1);
  //   this.calendar.push(this.week2);
  //   this.calendar.push(this.week3);
  //   this.calendar.push(this.week4);

  // }
}
