import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';




@NgModule({
  declarations: [
    ProductComponent,
    AddproductComponent,
    ProductlistComponent,
    DeletedialogComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbRating,
    NgxDropzoneModule
  ]
})
export class ProductModule { }
