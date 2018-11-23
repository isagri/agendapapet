import { Component, OnInit, Input } from '@angular/core';
import { Day } from '../../models/day';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  @Input() selectedDay: Day;

  constructor() { }

  ngOnInit() {
  }

}
