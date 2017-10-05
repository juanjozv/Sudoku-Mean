import { Component, OnInit } from '@angular/core';
import * as SudokuView from './sudokuView';
import { SudokuService } from '../../services/sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
  providers: [SudokuService, SudokuView]
})
export class SudokuComponent implements OnInit {
  matrix: any
  _sudokuView: any = new SudokuView();
  constructor(private _sudokuService: SudokuService) {
  }

  ngOnInit() {
    this._sudokuView.create();
  }

  createNewSudoku() {
    this._sudokuService.getNewSudoku('leo', 'normal', 'hoy').subscribe(res => { this.paintSudokuView(res) });
  }
  
  paintSudokuView(res_) {
    console.log(res_);
    this.matrix = res_;
    let newMatrix = Array.from({ length: 9 }, () => new Array(9));
    console.log(newMatrix);
    this.matrix.playableSudoku.forEach(elem => {
      newMatrix[elem.x][elem.y] = elem.value;
      // agregar pistas
    });
    this.matrix = newMatrix;
    console.log(this.matrix);
    this._sudokuView.paint(this.matrix);
  }
}
