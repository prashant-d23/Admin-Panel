import { Component } from '@angular/core';
import { OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NewsServiceService } from '../serices/news-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news-records',
  templateUrl: './news-records.component.html',
  styleUrls: ['./news-records.component.scss']
})
export class NewsRecordsComponent implements OnInit{

//Declaration

  displayedColumns: string[] = ['id', 'news_head', 'article','date','action'];
 NewsSource = new MatTableDataSource<NewsInterface>;


//For Paginator 
@ViewChild(MatPaginator) paginator!: MatPaginator;
  
//For Sorting
  @ViewChild(MatSort) Sort!:MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.NewsSource.filter = filterValue.trim().toLowerCase();

    if (this.NewsSource.paginator) {
      this.NewsSource.paginator.firstPage();
    }
  }

//constructor call

  constructor(private NewsService:NewsServiceService,private route:Router){

  }

  

  //OnInIt Hook
  ngOnInit(): void {
    this.NewsRec()
    
}
  
//To get records
  NewsRec() {
    this.NewsService.getDataFromServer("newsSource").subscribe((response: any) => {
      if (response && response.length > 0) {
        this.NewsSource = new MatTableDataSource(response);
        this.NewsSource.paginator = this.paginator ;
         this.NewsSource.sort  = this.Sort;
      }
    
    },
      error => {

      })
  }

  //To Delete Record

  deleteData(row:any){

    let endPoint='newsSource/'+row.id;
  
    this.NewsService.deleteNews(endPoint).subscribe((response:any)=>{
      window.location.reload()
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

//Interface News Records
export interface NewsInterface {
  index: number;
  news_head: string;
  article: string;
  date: string;
}

