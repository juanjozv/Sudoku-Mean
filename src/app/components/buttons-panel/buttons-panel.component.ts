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

  //-------------------------------
  loadSudokus() {
    let user = this._userOptionsView.getUser();
    if (user != "empty") {
      this._sudokuService.loadUserSudokus(user).subscribe(res => { this.showSudokus(res); });
    }
  }
  loadSudokuInMatrix(id) {
    console.log(id);
    this._sudokuService.loadSudoku(id).subscribe(res => { this.repaintMatrix(res); });
  }
  repaintMatrix(res) {
    res.playableSudoku.forEach((e) => {
      if (!e.isClue) e.value = ' ';
    });
    console.log(res);
    this._sudokuComponent.paintSudokuView(res);
  }
  createRow(sudoku) {
    const icon = '<td><span class="glyphicon glyphicon-user"></span></td>',
      difficulty = '<td>' + sudoku.difficulty + '</td>',
      lastPlayed = '<td>' + sudoku.lastPlayed + '</td>',
      button = '<td><button type="button" data-target="#loadModal" data-toggle="modal" class="btn btn-primary badge" id="' + sudoku._id + '"><span class="glyphicon glyphicon-plus"></button></span>',
      row = '<tr>' + icon + difficulty + lastPlayed + button + '</tr>';
    return row;
  }
  showSudokus(sudokusList) {
    let row;
    $('#userGames').html('');
    console.log(sudokusList);
    for (let sudoku of sudokusList) {
      row = this.createRow(sudoku);
      $('#userGames').append(row);
      this.onclickEvent(sudoku);
    }
    this._userOptionsView.showModal();
  }
  onclickEvent(sudo) { 
    $('#'+sudo._id).click( ()=> {
      this.loadSudokuInMatrix(sudo._id);
      this._timeComponent.stopTimer();
      this._timeComponent.startTimer();
    })
    
  }
}