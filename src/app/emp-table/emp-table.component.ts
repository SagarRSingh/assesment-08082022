import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from 'src/Services/employee.service';

@Component({
  selector: 'emp-table',
  templateUrl: './emp-table.component.html',
  providers: [EmployeeServices]
})
export class EmpTableComponent implements OnInit {

  selectedType:string = 'all';
  employeeDataSource:any[]=[];
  employeeDisplayedColumns: string[] = ['Name', 'Gender', 'Salary', 'Address 1', 'Address 2', 'Pincode', 'UserType']

  constructor(private employee:EmployeeServices) { }

  ngOnInit(): void {
      this.employeeDataSource = this.employee.getEmployeeData();
  }

  changeTableData(){
    console.log('hello ', this.selectedType)
    if(this.selectedType === 'all') return;
    this.employeeDataSource = this.employee.getFilteredEmployeeData(this.selectedType);
  }

}
