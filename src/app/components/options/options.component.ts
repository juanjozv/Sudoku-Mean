import { Component, OnInit } from '@angular/core';
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
  constructor(private _sudokuService: SudokuService, private _sudokuComponent: SudokuComponent) { }

  ngOnInit() {
    this.loadSudokuInMatrix('ee');
   }

  loadSudokus() {
    let user = this._userOptionsView.getUser();
    if (user != "empty") {
      this._sudokuService.loadUserSudokus(user).subscribe(res => { this._userOptionsView.showSudokus(res); });
    }
  }
  loadSudokuInMatrix(id) {
    if(id != 'ee') {
      console.log(id);
      this._sudokuService.loadSudoku(id).subscribe(res => { this._sudokuComponent.paintSudokuView(res); });
    }
  }
}

