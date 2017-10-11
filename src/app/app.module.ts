/**
 * Sudoku
 * @author juanjozv@gmail.com
 * @author osqui.salazar@gmail.com
 * @author manca64@gmail.com
 * @author leogodinezs15@gmail.com
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { TimeComponent } from './components/time/time.component';
import { ButtonsPanelComponent } from './components/buttons-panel/buttons-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    TimeComponent,
    ButtonsPanelComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
