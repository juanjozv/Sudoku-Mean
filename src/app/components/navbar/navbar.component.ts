/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */

import { Component, OnInit } from '@angular/core';
import * as NavbarView from './navbarView';
import { SudokuComponent } from '../sudoku/sudoku.component';
import { SudokuService } from '../../services/sudoku.service';
import $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavbarView, SudokuComponent, SudokuService]
})
export class NavbarComponent implements OnInit {
  _navbarView: any = new NavbarView();
  constructor(private _sudokuComponent: SudokuComponent) { }

  ngOnInit() {
  }

  createObject(i) {
    return {x: Math.floor(i / 9), y: i % 9, value: null, isClue: false};
  }

  repaintBlancMatrix() {
    this._sudokuComponent._sudokuView.paint(Array.from({length: 81},
       (v, i) => this.createObject(i)), this._sudokuComponent.Matrix);
  }
  saveUsername() {
    this._navbarView.setUsername();
    this.repaintBlancMatrix();
  }

}
