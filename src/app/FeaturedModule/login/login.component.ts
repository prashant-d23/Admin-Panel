import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SignupComponent } from './signup/signup.component';
import { LogInService } from 'src/app/CoreModules/Services/log-in.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logIn!: FormGroup;
  showLogInError:boolean=false;
  userDetails={
    userName:"angular@velocity.com",
    userPassword:"Angular100"
  }
  
  constructor(private fb: FormBuilder,private router:Router,private dialog:MatDialog,private http:LogInService) { }

  ngOnInit(): void {
    this.createSignUp();
  }

  createSignUp() {
    this.logIn = this.fb.group({
      "user_email": ['', Validators.required],
      "user_pwd": ['', Validators.required]
    })
  }
  logInDashBoard() {
    const Input=this.logIn.value;
    console.log(this.logIn.value);
    const endPoint="credentials/";
     this.http.getDataFromDataBase(endPoint).subscribe((el:any)=>{
      console.log(el);
      let result=el.filter(function(el:any){
        return el.username==Input.user_email;
      })
      console.log("Result",result);
      if(result[0].password==Input.user_pwd){
        //console.log("logged In ,credentials correct");
         sessionStorage.setItem("isLoggedIn","True");
         this.router.navigate(['/dashBoard']);
      }
      else{
          this.showLogInError=true;
          this.logIn.reset();
        }
   
  })
   
  }
  openDialog(){
    let config=new MatDialogConfig();
    config.width="500px";
    this.dialog.open(SignupComponent,config);
  }
}

