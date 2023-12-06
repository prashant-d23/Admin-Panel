import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuard } from './CoreModules/Guards/can-load.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./FeaturedModule/login/login.module').then(m => m.LoginModule) },
  { path: 'dashBoard', loadChildren: () => import('./FeaturedModule/dash-board/dash-board.module').then(m => m.DashBoardModule),canLoad:[CanLoadGuard] },
  { path: 'categories', loadChildren: () => import('./FeaturedModule/categories/categories.module').then(m => m.CategoriesModule),canLoad:[CanLoadGuard] },
  { path: 'product', loadChildren: () => import('./FeaturedModule/product/product.module').then(m => m.ProductModule),canLoad:[CanLoadGuard] },
  { path: 'orders', loadChildren: () => import('./FeaturedModule/orders/orders.module').then(m => m.OrdersModule),canLoad:[CanLoadGuard] },
  { path: 'users', loadChildren: () => import('./FeaturedModule/users/users.module').then(m => m.UsersModule),canLoad:[CanLoadGuard] },
  { path: 'newsletter', loadChildren: () => import('./FeaturedModule/newsletter/newsletter.module').then(m => m.NewsletterModule),canLoad:[CanLoadGuard] },
  { path: 'setting', loadChildren: () => import('./FeaturedModule/setting/setting.module').then(m => m.SettingModule),canLoad:[CanLoadGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
