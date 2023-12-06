import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  baseUrl:string="http://localhost:3000/";
  httpHeader:HttpHeaders=new HttpHeaders().set("Content-type","application/json");
  constructor(private http:HttpClient) { 
     
  }

  getDataFromDataBase(endPoint:string):Observable<any>{
    const url=this.baseUrl+endPoint;
    return this.http.get(url,{headers:this.httpHeader});
    
  }

  saveDataToDataBase(endPoint:string,body:any){
    const url=this.baseUrl+endPoint;
    return this.http.post(url,body);
  }
  // savedataservice(endPoint:string,body:any){
  //   const url=this.baseUrl+endPoint;
  //   return this.http.post(url,body,{headers:this.httpHeader});
  // }
}
