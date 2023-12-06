import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable ,catchError,map,throwError} from 'rxjs';

@Injectable()
export class AppProjectInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    console.log("Inside Http Interceptor",request);


    ///===========Adding Token===========//
    //||!request.url.includes("")
    // if(!request.url.includes("login")){

    // }
    // else{
    //   const token="BHHHHDDWHKHKDHKWWGJHG";
    //   request=request.clone({setHeaders:{"Authorization":"Bearer"+token}})
    // }

    //=================Checking for Response============//
    return next.handle(request).pipe(map((resp:any)=>{
       console.log("Response received at interceptor"+resp.status);
       return resp
    }),
    catchError(this.handlerErrorResponse))
  }
  handlerErrorResponse(error:HttpErrorResponse):any{
    if(error.error instanceof ErrorEvent ){
      console.log("Client Side Error",error.error.message);
    }
    else{
      console.log("server Side error",error.message);
    }
    throwError("Unable to process Request Please try after Some time");
  
}
  

}
