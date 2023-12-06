import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { OrderService } from '../services/order.service';
import { SampleService } from 'src/app/sample.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  isShow: boolean = false;
  selectedOrder: any = null;
  displayedColumns: any[] = ['name', 'Createdat', 'status', 'price', 'Quantity', 'Actions'];
  dataSource: any;
  ;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private http: SampleService) {

  }
  ngOnInit(): void {

    this.http.getDataFromServer('orders').subscribe((response: any) => {
      if (response && response.length > 0) {
        console.log(response);

        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        // this.dataSource.sort =this.sort;
      }

    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onView(param: any) {
    console.log(param);
    this.selectedOrder = param;

    this.isShow = true;

  }
  onClose() {
    this.isShow = false;

  }
}





