import { Component, OnInit } from '@angular/core';
import * as SudokuView from './sudokuView';
import { SudokuService } from '../../services/sudoku.service';
import $ from 'jquery';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
  providers: [SudokuService, SudokuView]
})
export class SudokuComponent implements OnInit {
  _sudokuView: any = new SudokuView();
  private _matrix: any ; 
  constructor(private _sudokuService: SudokuService) {
  }

  ngOnInit() {
    this._sudokuView.create();
  }

  createNewSudoku() {
    this._sudokuService.getNewSudoku('leo', 'normal', 'hoy').subscribe(res => { this.paintSudokuView(res); });
  }

  paintSudokuView(res_) {
    //console.log(res_);
    let newMatrix = Array.from({ length: 9 }, () => new Array(9));
    //console.log(newMatrix);
    res_.playableSudoku.forEach(elem => {
      newMatrix[elem.x][elem.y] = elem.value;
    });
    console.log(newMatrix);
    this._matrix=newMatrix;
    this._sudokuView.paint(newMatrix);
  }

  checkSudoku(){
    //console.log(this._matrix);
    let matrixAux =  this._sudokuView.getMatrix(this._matrix);
    
    console.log(matrixAux);
    this._sudokuService.checkSudoku(matrixAux).subscribe(res => { this.result(res) });
  }
  result(_res){
    window.alert(_res.text);
  }
  reload(){
    this._sudokuView.paint(this._matrix);
  }
}
