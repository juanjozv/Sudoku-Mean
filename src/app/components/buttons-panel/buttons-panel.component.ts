import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { SudokuComponent } from '../sudoku/sudoku.component';
import { TimeComponent } from '../time/time.component';
import $ from 'jquery';
// In case of adding a new component in SudokuComponent, it should be added here too.
@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.css'],
  providers: [SudokuService, SudokuComponent, TimeComponent]
})
export class ButtonsPanelComponent implements OnInit {

  newMatrix: any = Array.from({ length: 9 }, () => new Array(9));
  JSONMatrix: any;
  // _timeComponent: any = new TimeComponent();
  constructor(private _sudokuService: SudokuService, private _sudokuComponent: SudokuComponent) { }

  ngOnInit() {
  }

  generateNewSudoku() {
    this._sudokuComponent.createNewSudoku();
    // this._timeComponent.stopTimer();
    // this._timeComponent.startTimer();
  }
  checkSudoku(){
    this._sudokuComponent.checkSudoku();
  }
  reload(){
    this._sudokuComponent.reload();
  }
  solveSudoku(){
    this._sudokuComponent.solveSudoku();
  }

}
