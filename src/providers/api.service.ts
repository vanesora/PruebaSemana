import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { }

  getNews(){
    return this.http.get('http://iris.net.co/products/semana/items/620853')
  }
}
