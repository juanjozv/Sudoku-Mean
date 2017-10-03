import { Component, OnInit } from '@angular/core';
/*import $ from 'jquery';
import Timer from 'easytimer';*/


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  t: any
  constructor() { }

  ngOnInit() {
   /* this.t = new Timer();
    this.t.start();
    this.t.addEventListener('secondsUpdated', function (e) {
      $('#timer').html(this.t.getTimeValues().toString());
    });*/
  }

}
