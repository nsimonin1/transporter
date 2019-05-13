import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { LayoutComponent } from './layout.component';

const appRoutes: Routes = [
  {
  path: '',
  component: LayoutComponent,
  children: [
    {path: 'index', component: HomePageComponent},
    {path: '', redirectTo: 'index'}
  ]
}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
