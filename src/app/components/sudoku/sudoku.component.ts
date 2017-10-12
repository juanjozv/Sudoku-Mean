/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

import { Component, OnInit } from '@angular/core';
import * as SudokuView from './sudokuView';
import { SudokuService } from '../../services/sudoku.service';
import * as userOptionView from '../buttons-panel/userOptionsView.js';


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

  get Matrix() {
    return this._matrix; 
  }
  // Service methods
  createNewSudoku() {
    this._sudokuService.getNewSudoku('default', 'random', '01-01-2000').subscribe(
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
 // Responses of server when you request, they run only with server up 
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
  paint(res_){
    this._sudokuView.paint(res_.playableSudoku, this._matrix);
  }
  
  checkedNotice(_res) {
    this._sudokuView.checkModal(_res.text);
  }
  
  // Client algorithms, they run only with server down
  checkSudokuClient() {
    this._sudokuView.checkModal(this._sudokuView.checkSudoku());
    console.log('Sudoku has checked locally')
  }
  createNewSudokuClient(n = 'random') {
    let userOptions = new userOptionView();
    userOptions.setStorageDifficulty(n);
    userOptions.setStorageSudokuId('na', 'true');
    this._sudokuView.generateSudoku(n, this._matrix);
    console.log('Sudoku has created locally')
  }
  solveSudokuClient() {
    this._sudokuView.solveSudoku(this._matrix);
    console.log('Sudoku has solved locally')
  }

  //both (server up and down)
  reload(sudoku = this._matrix) {
    this._sudokuView.reload(sudoku);
  }
  hasBegun(){
    return this._sudokuView.hasBegun();
  }

}
