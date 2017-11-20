/**
 * Sudoku Grupo 9  Horario: 1 pm
 * @author Juan José Zaldívar Vargas
 * @author Oscar Salazar Lizano
 * @author Manfred Zúñiga Vargas
 * @author Leonel Godínez Sánchez
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { TimeComponent } from './components/time/time.component';
import { ButtonsPanelComponent } from './components/buttons-panel/buttons-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ValuesComponent } from './components/values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    TimeComponent,
    ButtonsPanelComponent,
    NavbarComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
