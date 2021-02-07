import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable,of} from 'rxjs';
import { State } from '../shared/state';
import { District } from '../shared/district';



@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }

  getAllData():Observable<State>{
    return this.http.get<State>("https://api.covidindiatracker.com/state_data.json");
  }

}
