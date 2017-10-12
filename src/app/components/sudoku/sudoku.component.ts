/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */

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
  _sudokuView: any = new SudokuView();
  private _matrix: any;
  constructor(private _sudokuService: SudokuService) {
    this._matrix = Array.from({ length: 9 }, () => new Array(9).fill(' '));
  }

  ngOnInit() {
    this._sudokuView.create();

  }
  // Service methods
  createNewSudoku() {
    this._sudokuService.getNewSudoku('leo', 'normal', 'hoy').subscribe(
      res => this.paint(res),
      err => this.createNewSudokuClient()

    );
  }
  
  loadSudokuByDifficulty(d){
    this._sudokuService.loadByLevelSudoku(d).subscribe(
      res =>  this.paint(res), 
      err => this.createNewSudokuClient(d)
    );
  }

  checkSudoku() {

    let matrixAux = this._sudokuView.getMatrix();
    this._sudokuService.checkSudoku(matrixAux).subscribe(
      res => this.checkedNotice(res),
      err => this.checkSudokuClient()
    );
  }
  
  solveSudoku() {
    this._sudokuService.solveSudoku(this._matrix).subscribe(
      res => this.reload(res),
      err => this.solveSudokuClient()
    );
  } 
  // client methods with server up
  /*loadSudoku(res_) {
   /* res_.playableSudoku.forEach(elem => {
      (!elem.isClue) ? this._matrix[elem.x][elem.y] = ' ' : this._matrix[elem.x][elem.y] = elem.value;
    });*/
   /* this._sudokuView.paintLoaded(res_.playableSudoku, this._matrix);
}*/
  paint(res_){
    this._sudokuView.paint(res_.playableSudoku, this._matrix);
  }
  
  checkedNotice(_res) {
    this._sudokuView.checkModal(_res.text);
  }
  //with the server down 
  reload(sudoku = this._matrix) {
    this._sudokuView.reload(sudoku);
  }

  // Client algorithms, they run only with server down
  checkSudokuClient() {
    this._sudokuView.checkModal(this._sudokuView.checkSudoku());
  }
  createNewSudokuClient(n = 81) {
    this._sudokuView.generateSudoku(n, this._matrix);
  }
  solveSudokuClient() {
    this._sudokuView.solveSudoku(this._matrix);
    console.log('Sudoku has solved locally')
  }

}
