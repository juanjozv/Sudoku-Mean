import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { SudokuComponent } from '../sudoku/sudoku.component';

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.css'],
  providers: [ SudokuService ]
})
export class ButtonsPanelComponent implements OnInit {


  constructor(private _sudokuService: SudokuService, private _sudokuComponent: SudokuComponent) { }

  ngOnInit() {
  }

  generateNewSudoku() {
    this._sudokuService.getNewSudoku('leo', 'normal', 'hoy').subscribe(res => this._sudokuComponent.matrix = res);
    //mandar a repintar view
  }

}
