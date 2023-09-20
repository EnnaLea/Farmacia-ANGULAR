import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AngularMaterialModule } from '../angular-material.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AngularMaterialModule, 
    HomeRoutingModule
  ]
})
export class HomeModule { }
