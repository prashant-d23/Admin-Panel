import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  baseUrl:string="http://localhost:3000/";

  httpHeader:HttpHeaders = new HttpHeaders()
                           .set("Content-type","application/json");

  constructor(private http:HttpClient) { }

  // localhost:3000/get-user-list
  getDataFromServer(endPoint: string) {
    const url = this.baseUrl + endPoint;
    return this.http.get(url, { headers: this.httpHeader });
  }

  saveDataToServer(endPoint:string,body:any){
     const url = this.baseUrl + endPoint ;
     return this.http.post(url,body,{ headers: this.httpHeader });

  }

  deleteNews(endPoint:string){
    const url = this.baseUrl + endPoint;
    return this.http.delete(url, { headers: this.httpHeader });;
  }

}