import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpService } from './http.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  barData: number[] = [];
  pieData: number[] = [];
  mainData: any;
  mainObj:any;
  dailyEarnings!:any;
  dailyOrders:any;
  signupUsers:any;
  totalProducts:any;

  constructor(private http: HttpService) {

  }
  ngOnInit(): void {

    this.http.getDataFromServer("bardata").subscribe((response: any) => {
      if (response && response.length > 0) {
        this.barData = response;
        console.log("Data recived from server for bars ", this.barData)
      }
    },
      error => {

      })

    this.http.getDataFromServer("piedata").subscribe((response: any) => {
      if (response && response.length > 0) {
        this.pieData = response;
        console.log("Data recived from server for pie ", this.pieData)
      }
    },
      error => {

      })
  }

  Highcharts = Highcharts;
  Piecharts = Highcharts;
  linechart: any = {
    series: [
      {
        data: [10, 20, 50, 20, 40, 10, 50, 30, 20, 50, 40, 20],
        // data : this.barData,

      },
    ],
    chart: {
      type: 'column',


    },
    title: {
      text: 'Sales Report',
    },

    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
    },
  }

  circle: any = {
    series: [
      {
        data: [60, 10, 5, 10, 15],
        // data : this.pieData,
      },
    ],
    chart: {
      type: 'pie',


    },
    title: {
      text: 'Order Report',
    },
  }
}
