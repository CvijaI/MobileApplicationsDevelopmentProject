import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceAnimalsService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('https://swapi.dev/api/films/')
  }
}