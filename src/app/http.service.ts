import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

   baseUrl:string='http://localhost:3000/';
   httpHeaders:HttpHeaders = new HttpHeaders().set("Content-Type","application/json");


   getData(endPoint:string)
   {
     const url = this.baseUrl + endPoint;
     return this.http.get(url,{headers:this.httpHeaders});
   }
   saveData(endPoint:string,body:any)
   {
    const currentDate={
      CreatedAt:new Date()
    }
    const payload={
      ...currentDate,
      ...body
    }
    let url=this.baseUrl+endPoint;
    return this.http.post(url,payload);
  
    }
   updateData(endPoint:string,body:any)
   {
    const currentDate={
      CreatedAt:new Date()
    }
    const payload={
      ...currentDate,
      ...body
    }
   const url = this.baseUrl + endPoint ;
   return this.http.put(url,payload,{ headers: this.httpHeaders });
   }

   deleteData(endpoint:string){
   const url = this.baseUrl + endpoint;
    return this.http.delete(url,{headers:this.httpHeaders});
   }
}