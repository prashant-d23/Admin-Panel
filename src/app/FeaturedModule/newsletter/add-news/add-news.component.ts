import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NewsServiceService } from '../serices/news-service.service';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  
//Declarations

News!:FormGroup
date!:any

//Constructor Code

constructor(private newsBuild:FormBuilder,private Http:NewsServiceService,private route:Router){

}

//OnInIt Hook
ngOnInit(): void {
    this.createNews()
    
}

//To create FormControl for formGroup using FormBuilder
createNews(){
  this.News=this.newsBuild.group({
    "news_head":this.newsBuild.control('',[Validators.required]),
       "article":this.newsBuild.control('',[Validators.required,]),
       "date":new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().split("T")[0],
       
  })
}
//Submit Method
NewsPush(){

  this.Http.saveDataToServer("newsSource",this.News.value).subscribe((el:any)=>{
    console.log(el);
   
    this.displayStyle = "block";
   
 }) ;
 this.News.reset();
}

//bootstrap Modal

displayStyle = "none";
  

closePopup() {
  this.displayStyle = "none";
  window.location.reload()
}

}
