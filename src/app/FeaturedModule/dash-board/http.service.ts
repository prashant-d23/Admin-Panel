import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string="http://localhost:3000/";

  httpHeader:HttpHeaders = new HttpHeaders()
                           .set("Content-type","application/json");

  constructor(private http:HttpClient) { }


  getDataFromServer(endPoint: string) {
    const url = this.baseUrl + endPoint;
    return this.http.get(url, { headers: this.httpHeader });
  }
}
