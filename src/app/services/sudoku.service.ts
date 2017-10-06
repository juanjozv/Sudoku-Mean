import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SudokuService {
  constructor(private _http: Http) { }
  //private _url: string = './';

  /*getSudokuMatrixWithDifficulty(difficulty) {
    this._url += '?d=' + difficulty;
    return this._http.get(this._url)
      .map((response: Response) => response.json);
  }*/
  getNewSudoku(username: string, difficulty: string, lastPlayed: string) {
    return this._http.get('./api/newSudoku'/*, {
      params: {
        'username': username,
        'difficulty': difficulty,
        'lastPlayed': lastPlayed
      }
    }*/).map((response: Response) => { return response.json() });

  }
  checkSudoku(matrix) {
    //console.log(matrix);
    //console.log(JSON.stringify(matrix));
    let _url = './api/checkSudoku/'+ JSON.stringify(matrix) ;
    console.log(_url);
    return this._http.get(_url)
      .map((response: Response) => {return response.json()});
  }
  solveSudoku(matrix) {
    //console.log(matrix);
    //console.log(JSON.stringify(matrix));
    let _url = './api/solveSudoku/'+ JSON.stringify(matrix) ;
    console.log(_url);
    return this._http.get(_url)
      .map((response: Response) => {return response.json()});
  }

  getSudokuMatrix() {
    return this._http.get('./api/newSudoku')
      .map((response: Response) => response.json);
  }
}
