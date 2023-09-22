import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../angular-material.module';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    LoginRoutingModule,
    FormsModule,
  ]
})
export class LoginModule { }
