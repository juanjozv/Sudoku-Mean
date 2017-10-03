import { Component, OnInit } from '@angular/core';
import * as SudokuView from './sudokuView';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {
  s: any
  constructor() { }

  ngOnInit() {
    this.s = new SudokuView(0, x => x + 1, x => x > 81);
    this.s.create();
  }

}
