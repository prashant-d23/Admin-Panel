import { Component } from '@angular/core';
import { OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NewsServiceService } from '../serices/news-service.service';
@Component({
  selector: 'app-news-subscribers',
  templateUrl: './news-subscribers.component.html',
  styleUrls: ['./news-subscribers.component.scss']
})
export class NewsSubscribersComponent implements OnInit {
//Declarations
  
  displayedSubs: string[] = ['id', 'name', 'email','action'];
  SubSource = new MatTableDataSource<Subs>();

 


  constructor(private NewsService:NewsServiceService){

  }
  //OnInIt Hook
  ngOnInit(): void {
    this.SubRec()
  }

 //For Paginator 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

//For Sorting
  @ViewChild(MatSort) Sort!:MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.SubSource.filter = filterValue.trim().toLowerCase();

    if (this.SubSource.paginator) {
      this.SubSource.paginator.firstPage();
    }
  }

  //To Get Data

  SubRec() {
    this.NewsService.getDataFromServer("Subs").subscribe((response: any) => {
      if (response && response.length > 0) {
        this.SubSource = new MatTableDataSource(response);
        this.SubSource.paginator = this.paginator ;
         this.SubSource.sort  = this.Sort;
      }
    
    },
      error => {

      })
  }

  deleteSubs(element:any){
    let obj = {
      "id":element.id
    }
    this.NewsService.deleteNews('Subs'+'/'+obj.id).subscribe((response:any)=>{
      window.location.reload();
       this.SubSource._updateChangeSubscription;
    })
   
    this.displayStyle = "none";
   }
    
   //For Bootstrap Modal
   displayStyle = "none";
  
   openPopup() {
     this.displayStyle = "block";
   }
   closePopup() {
     this.displayStyle = "none";
   }

}


//Interface For Subscribers
export interface Subs{
  index:number;
  name:string;
  email:string;
}