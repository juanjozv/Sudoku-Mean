import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { OptionsComponent } from './components/options/options.component';
import { TimeComponent } from './components/time/time.component';
import { ButtonsPanelComponent } from './components/buttons-panel/buttons-panel.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent,
    OptionsComponent,
    TimeComponent,
    ButtonsPanelComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
