import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { SudokuComponent } from '../sudoku/sudoku.component';
import { TimeComponent } from '../time/time.component';
import $ from 'jquery';
import * as UserOptionsView from './userOptionsView';
// In case of adding a new component in SudokuComponent, it should be added here too.
@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.css'],
  providers: [SudokuService, SudokuComponent, TimeComponent, UserOptionsView]
})
export class ButtonsPanelComponent implements OnInit {

  newMatrix: any = Array.from({ length: 9 }, () => new Array(9));
  JSONMatrix: any;
  _userOptionsView: any = new UserOptionsView();
  constructor(private _sudokuService: SudokuService, private _sudokuComponent: SudokuComponent, private _timeComponent: TimeComponent) { }

  ngOnInit() { }

  generateNewSudoku() {
    this._sudokuComponent.createNewSudoku();
    this._timeComponent.stopTimer();
    this._timeComponent.startTimer();
  }
  checkSudoku() {
    this._sudokuComponent.checkSudoku();
  }
  reload() {
    this._sudokuComponent.reload();
    this._timeComponent.stopTimer();
    this._timeComponent.startTimer();
  }
  solveSudoku() {
    this._sudokuComponent.solveSudoku();
    this._timeComponent.showLastTime();
  }

  //------------------------------- User Options ----------
  loadByLevelSudoku(d){
    this._userOptionsView.storage(d);
    this._sudokuService.loadByLevelSudoku(d).subscribe(res => { this.repaintMatrix(res)});
  }

  loadSudokus() {
    let user = this._userOptionsView.getUser();
    if (user != "empty") {
      this._sudokuService.loadUserSudokus(user).subscribe(res => { this.showSudokus(res); });
    }
  }
  loadSudokuInMatrix(id) {
    this._sudokuService.loadSudoku(id).subscribe(res => { this.repaintMatrix(res); });
  }
  repaintMatrix(res) {
    res.playableSudoku.forEach((e) => {
      if (!e.isClue) e.value = ' ';
    });
    this._sudokuComponent.paintSudokuView(res);
  }

  // Load Saved Games
  repaintLoadMatrix(res) {
    res.playableSudoku.forEach((e) => {
      if (e.value == 0) e.value = ' ';
    });
    this._sudokuComponent.paintLoadSudokuView(res);
  }

  loadSavedGameInMatrix(id) {
    this._sudokuService.loadSudoku(id).subscribe(res => { this.repaintLoadMatrix(res); });
  }


  showSudokus(sudokusList) {
    let row;
    $('#userGames').html('');
    for (let sudoku of sudokusList) {
      row = this._userOptionsView.createRow(sudoku);
      $('#userGames').append(row);
      this.onclickEvent(sudoku);
    }
    this._userOptionsView.showModal();
  }
  onclickEvent(sudo) {
    $('#' + sudo._id).click(() => {
      this.loadSavedGameInMatrix(sudo._id);
      this._timeComponent.stopTimer();
      this._timeComponent.startTimer();
    })
  }


  saveGame() {
    let gameUser = this._userOptionsView.getUser();
    let gameDifficulty = "normal"; //Obtener la dificultad del juego
    let gameDate = this._userOptionsView.getCurrentDate();
    let matrixAux = this._sudokuComponent._sudokuView.getPlayableSudoku();

    let saveObject = {user: gameUser, difficulty: gameDifficulty, lastPlayed: gameDate, playableSudoku: matrixAux}
    if (gameUser != "empty") {
      this._sudokuService.saveSudoku(saveObject).subscribe(res => {  });
    }
  }
}