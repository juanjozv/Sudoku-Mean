import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';

@Component({
  selector: 'app-buttons-panel',
  templateUrl: './buttons-panel.component.html',
  styleUrls: ['./buttons-panel.component.css'],
  providers: [SudokuService]
})
export class ButtonsPanelComponent implements OnInit {

  newMatrix: any = Array.from({ length: 9 }, () => new Array(9));
  JSONMatrix: any;
  constructor(private _sudokuService: SudokuService) { }

  ngOnInit() {
  }

  generateNewSudoku() {
    this._sudokuService.getNewSudoku('leo', 'normal', 'hoy').subscribe(res => this.JSONMatrix  = res);

    this.JSONMatrix = JSON.parse(this.JSONMatrix);

    this.JSONMatrix.forEach(elem => {
      this.newMatrix[elem.x][elem.y] = elem.value;
      // agregar pistas
    });

    return this.newMatrix;
  }

}
