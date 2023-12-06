import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpService } from '../http.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { AddCategoryComponent } from '../add-category/add-category.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor(private http:HttpService,  private router:ActivatedRoute, private route:Router){

  }
  ngOnInit(): void {
    this.getCategoryList();
    
  }

  selectedId:string| null= null;
  
  getCategoryList(){
    this.http.getData('category').subscribe((resp:any)=>{
      console.log(resp);
      this.dataSource=new MatTableDataSource(resp);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort =this.sort;
     
      })
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id','category', 'description','CreatedAt','action' ];
  dataSource!: MatTableDataSource<any>;
  
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // onEdit(rowData:any){
      // let config= new MatDialogConfig;
      // config.width= "800px";
      // config.data={
      //   'action':"EDIT",
      //   'rowEdit':rowData}
      // this.dialog.open(AddCategoryComponent, config)
      
     
      
      // console.log(this.router)



  
  // getCategory(){
  //   let endPoint='category/'+this.selectedId;
  //   this.http.getData(endPoint).subscribe((resp:any)=>{
  //     console.log(resp);
  //     // this.dataSource.data.fill(resp)
  //   })
  // }
  onDelete(row:any,index:number){
    if(confirm("Do you want to delete?")){

      const url='category/'+row.id;
      this.http.deleteData(url).subscribe((resp:any)=>{
        this.dataSource.data.splice(index,1);
        this.dataSource._updateChangeSubscription();
  
      });
    }else{}
  }
  indexCounter:number=1;
  incrementCount(el:number):number{
     return this.indexCounter++;
  }
}
export interface CategoryData{
  Category:string,
  Description:string 
}
