/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

import { Component, OnInit } from '@angular/core';
import * as Timer from '../../../../src/assets/javascripts/timerView';
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
  ngOnInit() {}

  startTimer() {
    this._myTimer.startTimer();
  }

  stopTimer() {
    this._myTimer.stopTimer();
  }

  showLastTime() {
    this._myTimer.showLastTimer();
  }

}
