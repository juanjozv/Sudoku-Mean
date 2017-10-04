import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SudokuService {
  constructor(private _http: Http) { }
  private _url: string = "http://localhost/8080/api/sudokus"

  getSudokuMatrixWithDifficulty(difficulty){
    this._url += '?d='+ difficulty;
    return this._http.get(this._url)
          .map(( response:Response) => response.json ) ;
  }

  getSudokuMatrix(){
    return this._http.get(this._url)
          .map(( response:Response) => response.json ) ;
  }
}
