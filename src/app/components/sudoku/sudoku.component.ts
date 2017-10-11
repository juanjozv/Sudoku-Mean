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
    this._matrix = Array.from({ length: 9 }, () => new Array(9));
  }

  ngOnInit() {
    this._sudokuView.create();

  }

  createNewSudoku() {
    this._sudokuService.getNewSudoku('leo', 'normal', 'hoy').subscribe(
      res => this.paintSudokuView(res),
      err => this.createNewSudokuClient()

    );
  }

  paintLoadSudokuView(res_) {
    res_.playableSudoku.forEach(elem => {
      (!elem.isClue) ? this._matrix[elem.x][elem.y] = ' ' : this._matrix[elem.x][elem.y] = elem.value;
    });
    this._sudokuView.paintLoadMatrix(res_.playableSudoku);
  }
  paintSudokuView(res_) {
    res_.playableSudoku.forEach(elem => {
      this._matrix[elem.x][elem.y] = elem.value;
    });
    this._sudokuView.paint(this._matrix);
  }
  checkSudoku() {

    let matrixAux = this._sudokuView.getMatrix();
    this._sudokuService.checkSudoku(matrixAux).subscribe(
      res => this.result(res),
      err => this.checkSudokuClient(),
      () => console.log('kha')
    );
  }

  solveSudoku() {
    this._sudokuService.solveSudoku(this._matrix).subscribe(
      res => this._sudokuView.paint(res),
      err => this.solveSudokuClient()
    );
  }

  result(_res) {
    // window.alert(_res.text);
    this._sudokuView.checkModal(_res.text);
  }
  reload() {
    this._sudokuView.paint(this._matrix);
  }
  // Client algorithms
  checkSudokuClient() {
    this._sudokuView.checkModal(this._sudokuView.checkSudoku());
  }
  createNewSudokuClient() {
    this._sudokuView.generateSudoku();
  }
  solveSudokuClient() {
    this._sudokuView.solveSudoku();
    console.log('Resuelto desde el cliente')
  }

}
