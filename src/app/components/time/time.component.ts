import { Component, OnInit } from '@angular/core';
import * as Timer from './timerView';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [Timer]
})
export class TimeComponent implements OnInit {
  _myTimer: any = new Timer();
  constructor(private _elementRef: ElementRef) { }
  ngOnInit() {
    //this.startTimer();
  }

  startTimer() {
    this._myTimer.startTimer();
  }

  stopTimer() {
    this._myTimer.stopTimer();
  }


}
