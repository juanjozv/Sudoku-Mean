import { Injectable, NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SudokuService {
  constructor(private _http: Http) { }
  
  loadByLevelSudoku(d){
    let _url ='./api/newSudokuDifficulty/' + d;
    return this._http.get(_url)
    .map((response: Response) => response.json());
  }

  getNewSudoku(username: string, difficulty: string, lastPlayed: string) {
    return this._http.get('./api/newSudoku').map((response: Response) => { return response.json() });
  }
  checkSudoku(matrix) {
    let _url = './api/checkSudoku/'+ JSON.stringify(matrix) ;
    return this._http.get(_url)
      .map((response: Response) => {return response.json()});
  }
  solveSudoku(matrix){
    let _url = './api/solveSudoku/'+ JSON.stringify(matrix) ;
    return this._http.get(_url)
      .map((response: Response) => {return response.json()})
    
  }
  loadUserSudokus(user){
    let _url = './api/sudokus/'+user;
    return this._http.get(_url)
    .map((response: Response) => response.json());
  }
  loadSudoku(id){
    let _url = './api/sudoku/'+ id ;
    return this._http.get(_url)
    .map((response: Response) => response.json());
  }

  

  saveSudoku(saveObject){
    //let _url = './api/save/'+ JSON.stringify(saveObject);
    let _url = './api/save';
    // if( id != null) {
    //   //POST
    // }
    // if() //PUT

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(_url, JSON.stringify(saveObject), options)
    .map((response: Response) => response.json());
  }
}
