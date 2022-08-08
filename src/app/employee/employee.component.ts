import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";


@Component({
    selector: 'employee',
    templateUrl: './employee.component.html'
})

export class EmployeeComponent{
    firstName:string='';
    middleName:string='';
    lastName:string='';
    email:string='';
    selectedGender=null;


    saveEmployee(form:NgForm){
        console.log(form.value)
    }
}