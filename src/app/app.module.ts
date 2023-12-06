import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './SharedModules/shared/shared.module';
import { MaterialModule } from './MaterialModule/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppProjectInterceptor } from './CoreModules/InterCeptors/app-project.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
   
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,


  ],
  providers: [ 
  //   {
  //   provide:HTTP_INTERCEPTORS,
  //   useClass:AppProjectInterceptor,
  //   multi:true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }


