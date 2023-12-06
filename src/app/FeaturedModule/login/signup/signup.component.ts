import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInService } from 'src/app/CoreModules/Services/log-in.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpForm!:FormGroup;
 
  

constructor(private fb:FormBuilder,private router:Router,private http:LogInService){}
ngOnInit():void{
  this.createsignUpForm();
}
createsignUpForm(){
  this.signUpForm=this.fb.group({
    "username":['',[Validators.required]],
    "gender":['',[Validators.required]],
    "contactnum":['',[Validators.required]],
    "password":['',[Validators.required]],
    // "confirmPassword":['',[Validators.required]],
    
  })
 
}
signUp(){
  console.log(this.signUpForm.value);

  this.http.saveDataToDataBase("credentials",this.signUpForm.value).subscribe((el:any)=>{
    console.log(el);
  })
 
 
  
}
// get confirmPassword(){
//   return this.signUpForm.get("confirmPassword");
// }
// get userName(){
//   return this.signUpForm.get("userName");
// }
// get age(){
//   return this.signUpForm.get("age");
// }


}
