import { Component } from "@angular/core";
import { Pipe } from "@angular/core";

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html'
})

export class EmployeeListComponent{
    employeeList:any[] = [
        {firstName: 'hello', middleName: 'Wor', lastName:'ld', age: 20, gender: 'male', DOB: new Date(1,1,2005), addr1: 'primaty', addr2: 'secondary'},
        {firstName: 'hello', middleName: 'Wor', lastName:'ld', age: 20, gender: 'male', DOB: new Date(1,1,2005), addr1: 'primaty', addr2: 'secondary'},
        {firstName: 'hello', middleName: 'Wor', lastName:'ld', age: 20, gender: 'male', DOB: new Date(1,1,2005), addr1: 'primaty', addr2: 'secondary'},
        {firstName: 'hello', middleName: 'Wor', lastName:'ld', age: 20, gender: 'male', DOB: new Date(1,1,2005), addr1: 'primaty', addr2: 'secondary'},
        {firstName: 'hello', middleName: 'Wor', lastName:'ld', age: 20, gender: 'male', DOB: new Date(1,1,2005), addr1: 'primaty', addr2: 'secondary'},
    ]
}