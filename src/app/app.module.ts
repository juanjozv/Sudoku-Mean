import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { OptionsComponent } from './components/options/options.component';
import { TimeComponent } from './components/time/time.component';
import { ButtonsPanelComponent } from './components/buttons-panel/buttons-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    OptionsComponent,
    TimeComponent,
    ButtonsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
