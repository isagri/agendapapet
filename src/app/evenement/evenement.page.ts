import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as moment from 'moment';
import { isNull } from 'util';


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.page.html',
  styleUrls: ['./evenement.page.scss'],
})
export class EvenementPage implements OnInit {
  day; 
  time;
  title;
  description;
  lieu;
 
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    moment.locale('fr');
    if (this.route.snapshot.paramMap.get('day') == null ) {
      this.day = null;
    } else {
      this.day = moment(this.route.snapshot.paramMap.get('day')).format('YYYY-MM-DD');
    }
    this.time=null;
    this.title=null;
    this.description=null;
    this.lieu=null;

    console.log(this.day);
  }

  onSave() {
    console.log("day : " + this.day);
    console.log("time : " + this.time);
    console.log("title : " + this.title);
    console.log("description : " + this.description);
    console.log("lieu : " + this.lieu);
    
    this.location.back();
    //this.router.navigateByUrl('/tabs/(home:home)');
  }
}
