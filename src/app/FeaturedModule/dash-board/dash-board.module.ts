import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { MaterialModule } from 'src/app/MaterialModule/material/material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    MaterialModule,
    HighchartsChartModule,
    HttpClientModule
  ]
})
export class DashBoardModule { 
 

}
