import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { DialogContainerComponent } from './dialog/dialogContainer.component';
import { AllDataApiService } from 'src/Services/data/person-data.services';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,EmployeeListComponent, EmpTableComponent,DialogContainerComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, FormsModule, 
    BrowserAnimationsModule, HttpClientInMemoryWebApiModule.forRoot(AllDataApiService), HttpClientModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, 
    MatTableModule, MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
