import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost:3000/';
  httpHeaders:HttpHeaders = new HttpHeaders().set("Content-Type","application/json");

  getDataFromServer(endPoint:string){
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.httpHeaders});
  }

  saveDataToServer(endPoint:string,body:any){
    const currentDate = {
      'created_at' : new Date()
    }
    const payload = {
      ...currentDate,
      ...body
    }
    const url = this.baseUrl + endPoint;
    return this.http.post(url,payload,{headers:this.httpHeaders});
  }

  deleteDataFromServer(endPoint:any){
    const url = this.baseUrl + endPoint;
    return this.http.delete(url,{headers:this.httpHeaders})
  }

  updateDataToServer(endPoint:string,body:any){
    const currentDate = {
      'created_at' : new Date()
    }
    const payload = {
      ...currentDate,
      ...body
    }
    const url = this.baseUrl + endPoint;
    return this.http.put(url,payload,{headers:this.httpHeaders});
  }

  queryParam:any;
}
