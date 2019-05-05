import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { NavbarComponent } from '../common/navbar/navbar.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  providers: [],
  declarations: [HomePageComponent, NavbarComponent],
  imports: [
    CommonModule,
    NgbModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
