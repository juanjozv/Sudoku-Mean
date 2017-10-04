import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { SudokuComponent } from '../sudoku/sudoku.component';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.css'],
  providers: [ SudokuService ]
})
export class ButtonsPanelComponent implements OnInit {

  constructor(private _sudokuService: SudokuService, private _sudokuComponent: SudokuComponent,
  private _appModule: AppModule) { }

  ngOnInit() {
  }

  generateNewSudoku() {
    this._sudokuService.getNewSudoku('leo', 'normal', 'hoy').subscribe(res => this._appModule.matrix = res);
    this._appModule.
  }

}
