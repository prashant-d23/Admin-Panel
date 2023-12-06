import { Component,OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SampleService } from '../../../sample.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {


  dataSource!:any;
  starRating:number = 5;

  isChecked:boolean = true;

  isLoaded:boolean = false;



  displayedColumns: any[] = [
    'productName',
    'created_at',
    'status',
    'rating',
    'regularPrice',
    'featured',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private http:SampleService,private router:Router, private dialog:MatDialog){}

  ngOnInit() {
    this.isLoaded = true;
    this.http.getDataFromServer('products').subscribe((response:any)=>{
      if(response && response.length > 0){


        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      }
      this.isLoaded = false;
    },
    error => {
      this.isLoaded = false;
    })
  }

  deleteProduct(rowData:any,index:any,enterAnimationDuration?: string, exitAnimationDuration?: string){
    let config = new MatDialogConfig();
    config.width = "700px";
    const dialogRef = this.dialog.open(DeletedialogComponent);
    dialogRef.afterClosed().subscribe((result:boolean)=>{
      if(result === true){

        const url = 'products/' + rowData.id;
        this.http.deleteDataFromServer(url).subscribe((response: any) => {
          const data = this.dataSource.data;
          data.splice(index, 1);
          this.dataSource.data = data;
          this.dataSource._updateChangeSubscription(response);
        })
      }

    })
  }
  viewProduct(product:any){
    console.log(product);
  }

  editProduct(rowId:any){
    const queryParams:any = {
      id : rowId,
      flag : true
    };

    this.http.queryParam = queryParams;
    this.router.navigate(['/product/addproduct'],{skipLocationChange : true} )
  }
}
