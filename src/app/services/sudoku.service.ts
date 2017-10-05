import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SudokuService {
  constructor(private _http: Http) { }
  private _url: string = 'http://localhost:8080/api/sudokus';

  /*getSudokuMatrixWithDifficulty(difficulty) {
    this._url += '?d=' + difficulty;
    return this._http.get(this._url)
      .map((response: Response) => response.json);
  }*/
  getNewSudoku(username: string, difficulty: string, lastPlayed: string) {
    return this._http.get(this._url/*, {
      params: {
        'username': username,
        'difficulty': difficulty,
        'lastPlayed': lastPlayed
      }
    }*/).map((response: Response) => {return response.json()});

  }
  getSudokuMatrix() {
    return this._http.get(this._url)
      .map((response: Response) => response.json);
  }
}
