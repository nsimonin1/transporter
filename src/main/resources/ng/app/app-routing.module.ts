import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



const appRoutes: Routes = [
  {path: 'index',  loadChildren: './home-page/home-page.module#HomePageModule'},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'}
];


@NgModule({
  providers: [BsModalService, BsModalRef],
  imports: [
    RouterModule.forRoot(appRoutes,
      {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
