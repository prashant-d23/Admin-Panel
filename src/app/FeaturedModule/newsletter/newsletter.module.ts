import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterRoutingModule } from './newsletter-routing.module';
import { NewsletterComponent } from './newsletter.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';
import { NewsRecordsComponent } from './news-records/news-records.component';
import { NewsSubscribersComponent } from './news-subscribers/news-subscribers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



//Material Module

@NgModule({
  declarations: [
    NewsletterComponent,
    AddNewsComponent,
    NewsRecordsComponent,
    NewsSubscribersComponent,
  
  ],
  imports: [
    CommonModule,
    NewsletterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    
   
   

    //news material
    
 
    

  ]
})
export class NewsletterModule { }
