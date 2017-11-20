/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { SudokuComponent } from '../sudoku/sudoku.component';
import { TimeComponent } from '../time/time.component';
import $ from 'jquery';
import * as UserOptionsView from '../../../../src/assets/javascripts/userOptionsView';
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
    this._userOptionsView.setStorageDifficulty('random');
    this._userOptionsView.setStorageSudokuId('na', 'true');
  }
  checkSudoku() {
    if (this._sudokuComponent.hasBegun()) this._sudokuComponent.checkSudoku()
    else this._userOptionsView.warning('You must create a new sudoku!')
  }
  reload() {
    if (this._sudokuComponent.hasBegun()) {
      this._sudokuComponent.reload();
      this._timeComponent.stopTimer();
      this._timeComponent.startTimer();
    }
  }
  solveSudoku() {
    if (this._sudokuComponent.hasBegun()) {
      this._sudokuComponent.solveSudoku();
      this._timeComponent.showLastTime();
    }
    else this._userOptionsView.warning('You must create a new sudoku!')

  }
  loadByLevelSudoku(d) {
    this._userOptionsView.setStorageDifficulty(d);
    this._sudokuComponent.loadSudokuByDifficulty(d);
    this._timeComponent.stopTimer();
    this._timeComponent.startTimer();
    this._userOptionsView.setStorageSudokuId('na', 'true');
  }

  //------------------------------- User Options ----------
  loadSudokus() {
    let user = this._userOptionsView.getUser();
    if (user != "empty") {
      this._sudokuService.loadUserSudokus(user).subscribe(
        res => this.showSudokus(res),
        err => this.showSudokus(this._userOptionsView.getStorageClientByUser(user))
      );
    }
  }

  // Load Saved Games
  repaintLoadMatrix(res) {
    this._sudokuComponent.paint(res);
  }

  loadSavedGameInMatrix(id) {
    this._sudokuService.loadSudoku(id).subscribe(
      res => this.repaintLoadMatrix(res),
      err => this.repaintLoadMatrix(this._userOptionsView.getSudokuIdStorage(id))
    );
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
      this._userOptionsView.setStorageSudokuId(sudo._id, 'false');
    })

  }

  showSaveModal() {
    this._userOptionsView.showSaveGameModal()
  }

  saveGame() {
    let gameUser = this._userOptionsView.getUser();
    let gameDifficulty = this._userOptionsView.getStorageDifficulty();
    let gameDate = this._userOptionsView.getCurrentDate();
    let matrixAux = this._sudokuComponent._sudokuView.getPlayableSudoku();
    let gameId = this._userOptionsView.getStorageSudokuId();
    let isNewGame = this._userOptionsView.getIsNewGame(); //returns true or false

    let saveObject = { _id: gameId, user: gameUser, difficulty: gameDifficulty, lastPlayed: gameDate, playableSudoku: matrixAux }
    if (gameUser != "empty") {
      if (this._sudokuComponent.hasBegun()) {
        this._sudokuService.saveSudoku(saveObject, isNewGame).subscribe(
          res => {
            this.showSaveModal();
            this._userOptionsView.setStorageSudokuId(res.sudokuId, 'false');
            saveObject._id = res.sudokuId;
            this.saveGameClient(saveObject);
          },
          err => {
            if(saveObject._id == 'na') saveObject._id=window.localStorage.length;
            this.saveGameClient(saveObject);
          });
      }
      else this._userOptionsView.warning('You must create a new sudoku!')
    }
  }
  saveGameClient(obj) {
    this._userOptionsView.storageClient(obj);
    this._userOptionsView.showSaveGameModal();
  }
}
