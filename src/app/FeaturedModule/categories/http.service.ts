import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseUrl:string="http://localhost:3000/"
  constructor(private service:HttpClient) { }
  
  getData(endPoint:string){
   let  url=this.baseUrl+endPoint
   return this.service.get(url);
  }
  postData(endPoint:string,body:any){
    const currentDate={
      CreatedAt:new Date()
    }
    const payload={
      ...currentDate,
      ...body
    }
    let url=this.baseUrl+endPoint;
    return this.service.post(url,payload);
  }
  editData(endPoint:string,body:any){
    const currentDate={
      CreatedAt:new Date()
    }
    const payload={
      ...currentDate,
      ...body
    }
    let url=this.baseUrl+endPoint;
    return this.service.put(url,payload);
  }
deleteData(endPoint:string){
 const url=this.baseUrl+endPoint
 return  this.service.delete(url);
}

}
