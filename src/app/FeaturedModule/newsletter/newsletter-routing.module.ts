import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './newsletter.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsRecordsComponent } from './news-records/news-records.component';
import { NewsSubscribersComponent } from './news-subscribers/news-subscribers.component';

const routes: Routes = [
  { path: '', component: NewsletterComponent,
children:[
  {path:'addnews',component:AddNewsComponent},
  {path:'newsRec',component:NewsRecordsComponent},
  {path:'Subs',component:NewsSubscribersComponent},
  {path:'',redirectTo:'addnews',pathMatch:'full'}

]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsletterRoutingModule { }
