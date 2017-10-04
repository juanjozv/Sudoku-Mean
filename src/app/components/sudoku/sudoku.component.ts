import { Component, OnInit } from '@angular/core';
import * as SudokuView from './sudokuView';
import { SudokuService } from '../../services/sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
  providers: [ SudokuService ]
})
export class SudokuComponent implements OnInit {
  s: any
  matrix: any 
  constructor(private _sudokuService: SudokuService) { }

  ngOnInit() {
    this.s = new SudokuView(0, x => x + 1, x => x > 81);
    this.s.create();
  }

}
