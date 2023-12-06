import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean  {
    let isLoggedIn=sessionStorage.getItem("isLoggedIn");
    if(isLoggedIn==="True"){
      return true;
    }
    else{
      confirm("Please LogIn");
      return false;

    }
      //return true;
  }
}
