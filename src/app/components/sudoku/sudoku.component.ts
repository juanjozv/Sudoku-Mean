import { Component, OnInit } from '@angular/core';
import * as SudokuView from './sudokuView';
import { SudokuService } from '../../services/sudoku.service';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
  providers: [ SudokuService ]
})
export class SudokuComponent implements OnInit {

  private _sudokuView: any;
  constructor(private _sudokuService: SudokuService, private _appModule: AppModule) { }

  ngOnInit() {
    this._sudokuView = new SudokuView(0, x => x + 1, x => x > 81);
    this._sudokuView.create();
  }

  paint(toPaintMatrix: any) {
    this._sudokuView.paint(toPaintMatrix);
  }
}
