import { Component, OnInit } from '@angular/core';
// import * as Timer from './timerView';
import $ from 'jquery';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  // myTimer: any = new Timer();
  constructor() { }
  ngOnInit() {
    // this.myTimer.start();
    // this.myTimer.addEventListener('secondsUpdated', function (e) {
    //   $('#timer').html(this.myTimer.getTimeValues().toString());
    // });
  }

}
