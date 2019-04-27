import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', loadChildren: './layout/layout.module#LayoutModule'},
  {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
