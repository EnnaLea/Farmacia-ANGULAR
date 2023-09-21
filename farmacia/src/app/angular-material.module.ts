import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    NgbModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
    MatDialogModule, 
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
   
   
  

  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  
  ]
})
export class AngularMaterialModule { }
