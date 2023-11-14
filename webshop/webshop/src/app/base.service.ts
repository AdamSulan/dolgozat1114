import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverURL="http://localhost:3000/products/"
  mUrl="http://localhost:3000/orders"

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.serverURL)
  }
  addOrder(body:any){
    return this.http.post(this.mUrl, body)
  }
}
