import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FinalProject';
  constructor( public router:Router){

  }
  logOut(){
    // sessionStorage.setItem("isLoggedIn","true");
    sessionStorage.setItem("isLoggedIn","False");
    this.router.navigate(['/login']);
  }
}
