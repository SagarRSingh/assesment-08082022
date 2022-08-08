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
    age:number=0;
    email:string='';
    selectedGender='';
    DOB:any;
    addr1:string = '';
    addr2:string = '';
    pincode:number= 0;


    saveEmployee(form:NgForm){
        console.log(form.value)
    }
}