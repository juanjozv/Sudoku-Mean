import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { SudokuComponent } from '../sudoku/sudoku.component';
import * as UserOptionsView from './userOptionsView';
import $ from 'jquery';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  providers: [SudokuService, UserOptionsView, SudokuComponent]
})
export class OptionsComponent implements OnInit {
  _userOptionsView: any = new UserOptionsView();
  constructor(private elRef: ElementRef, private _sudokuService: SudokuService, private _sudokuComponent: SudokuComponent) { }

  ngOnInit() { }


  /*renderGames(data) {
    data.forEach((x, i) => $('#games').append($('<div class="loadMatchPanel" id="loadedMatch">' +
      "<p class='info'> Match #" + (i + 1) + " </p>" +
      "<p class='info'> Date: " + this.beautifyDate(x.date) + "</p>" +
      "</div> <br>").click(() => this.renderSavedGame(x.grid))
    ))
  }*/

  createRow(sudoku) {
    const icon = '<td><span class="glyphicon glyphicon-user"></span></td>',
      difficulty = '<td>' + sudoku.difficulty + '</td>',
      lastPlayed = '<td>' + sudoku.lastPlayed + '</td>',
      button = '<td><button type="button" data-target="#loadModal" data-toggle="modal" class="btn btn-primary badge" id="'+ sudoku._id +'"><span class="glyphicon glyphicon-plus"></button></span>',
      row = '<tr>' + icon + difficulty + lastPlayed + button + '</tr>';
    return row;
  }

  showSudokus(sudokusList) {
    let row;
    console.log(sudokusList);
    for (let sudoku of sudokusList) {
      row = this.createRow(sudoku);
      $('#userGames').append(row).click(() => this.loadSudokuInMatrix(sudoku._id));
    }
    //$('#loadModal').modal();
  }


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
    res.playableSudoku.forEach( (e)=>{
      if(!e.isClue) e.value=' ';
    } );
    console.log(res);
    this._sudokuComponent.paintSudokuView(res);
  }



}

