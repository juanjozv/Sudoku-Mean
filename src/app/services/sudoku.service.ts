import { Injectable, NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SudokuService {
  constructor(private _http: Http) { }

  loadByLevelSudoku(d) {
    let _url = './api/newSudokuDifficulty/' + d;
    return this._http.get(_url)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  getNewSudoku(username: string, difficulty: string, lastPlayed: string) {
    return this._http.get('./api/newSudoku', { headers: new Headers({ 'Accept': '*/*' }) })
      .map((response: Response) => { return response.json() })
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  checkSudoku(matrix) {
    let _url = './api/checkSudoku/' + JSON.stringify(matrix);
    return this._http.get(_url)
      .map((response: Response) => { return response.json() })
      .catch(this.handleError)
  }

  solveSudoku(matrix) {
    let _url = './api/solveSudoku/' + JSON.stringify(matrix);
    return this._http.get(_url)
      .map((response: Response) => { return response.json() })
      .catch(this.handleError)

  }

  loadUserSudokus(user) {
    let _url = './api/sudokus/' + user;
    return this._http.get(_url)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  loadSudoku(id) {
    let _url = './api/sudoku/' + id;
    return this._http.get(_url)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  saveSudoku(saveObject, isNewGame) {
    let _url = './api/save';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return (isNewGame) ? this._http.post(_url, JSON.stringify(saveObject), options)
      .map((response: Response) => response.json())
      .catch(this.handleError) :
      this._http.put(_url, JSON.stringify(saveObject), options)
        .map((response: Response) => response.json());
  }
  handleError(error: Response) {
    return Observable.throw(error.text() || 'Server error');
  }
}
