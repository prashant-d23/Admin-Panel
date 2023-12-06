import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class OrdersModule { }
