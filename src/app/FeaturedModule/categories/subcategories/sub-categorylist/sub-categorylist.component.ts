import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-sub-categorylist',
  templateUrl: './sub-categorylist.component.html',
  styleUrls: ['./sub-categorylist.component.scss']
})
export class SubCategorylistComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

    displayedColumns: any[] = ["category","description","Total_items","CreatedAt","Actions"];
    // FindIndex!:any;
    dataSource!:any;
    // todaysDate = new Date();

    // data:any[]=[];
    constructor(private http:HttpService,private router:Router) {}
  
    ngOnInit()
     {
      this.getDatalist();
     }
    
     getDatalist(){
    this.http.getData('subcategory').subscribe((response:any)=>{
      if(response && response.length > 0){
        this.dataSource = new MatTableDataSource(response);
        // console.log(response);

  //   this.http.getData("products").subscribe((res: any) => 
  //  {
  //    this.dataSource = new MatTableDataSource(res);
  //    // console.log(res);
     console.log("data Fetched sucessfully");
     this.dataSource.paginator = this.paginator;}
      }
    )}
    
        // this.dataSource.paginator=this.paginator;
        // this.dataSource.sort =this.sort;
    // deleteProduct(row:any,index:any){
    //   const url = 'products/' + row.id;
    //   this.http.deleteData(url).subscribe((response: any) => {
    //     const data = this.dataSource.data; // Get the underlying data array
    //     data.splice(index, 1); // Remove the item from the data array
    //     this.dataSource.data = data;
    //     this.dataSource._updateChangeSubscription(response);
    //   })
  
    
    OnDelete(rowData: any,index:number) 
    {
      if (confirm("Do you really want to delete")){

       
      const url='subcategory/'+rowData.id;
      this.http.deleteData(url).subscribe((resp:any)=>{
        this.dataSource.data.splice(index,1);
        this.dataSource._updateChangeSubscription();
  
      });
    }else{}
    
        
      }
     
       // console.log(rowData);
     
     
}
       
  
  // export interface CategoryData{
  //   Category:string,
  //   Description:string ,
  //   parent_category:string,
  // }

