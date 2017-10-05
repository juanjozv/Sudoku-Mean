import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { SudokuComponent } from '../sudoku/sudoku.component'

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.css'],
  providers: [SudokuService,SudokuComponent]
})
export class ButtonsPanelComponent implements OnInit {

  newMatrix: any = Array.from({ length: 9 }, () => new Array(9));
  JSONMatrix: any;
  constructor(private _sudokuService: SudokuService, private _sudokuComponent: SudokuComponent) { }

  ngOnInit() {
  }

  generateNewSudoku() {
     this._sudokuComponent.createNewSudoku();
  }

}
