import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/internal/Observable';
import {Menu} from './menu.model';


@Injectable({
  providedIn: 'root'
})
export class CardapioService {


  api = "http://localhost:3000"
 
  constructor(public http: HttpClient) {
  } 


  read(): Observable<Menu[]> {
    const url = `${this.api}/categories/14/menu`;
    return this.http.get<Menu[]>(url);
  }

  read2(): Observable<Menu[]> {
    const url = `${this.api}/categories/16/menu`;
    return this.http.get<Menu[]>(url);
  }

  read3(): Observable<Menu[]> {
    const url = `${this.api}/categories/17/menu`;
    return this.http.get<Menu[]>(url);
  }

  read4(): Observable<Menu[]> {
    const url = `${this.api}/categories/18/menu`;
    return this.http.get<Menu[]>(url);
  }
}
