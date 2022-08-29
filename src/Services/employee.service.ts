import { Injectable } from "@angular/core";
 
interface IEmployee {
  
    FirstName:string;
    MiddleName:string;
    LastName:string;
    Address1:string;
    Address2:string;
    Gender:string;
    Salary:number;
    Pincode: number;
    UserType:string;
}

@Injectable()
export class EmployeeServices {
    employees:IEmployee[] =[
        { FirstName:'hello', MiddleName:'world', LastName:'here', Address1:'get', Address2:' well', Gender:'male', Salary: 20000, Pincode:222222, UserType:'permanent'},
        { FirstName:'hello', MiddleName:'world2', LastName:'here', Address1:'getsoon', Address2:'get well', Gender:'female', Salary: 30000, Pincode:222222, UserType:'contract'},
        { FirstName:'hello', MiddleName:'world', LastName:'here', Address1:'get', Address2:' well', Gender:'male', Salary: 20000, Pincode:222222, UserType:'permanent'},
        { FirstName:'hello', MiddleName:'world2', LastName:'here', Address1:'getsoon', Address2:'get well', Gender:'female', Salary: 30000, Pincode:222222, UserType:'contract'},
        { FirstName:'hello', MiddleName:'world', LastName:'here', Address1:'get', Address2:' well', Gender:'male', Salary: 20000, Pincode:222222, UserType:'permanent'},
        { FirstName:'hello', MiddleName:'world2', LastName:'here', Address1:'getsoon', Address2:'get well', Gender:'female', Salary: 30000, Pincode:222222, UserType:'contract'},
        { FirstName:'hello', MiddleName:'world', LastName:'here', Address1:'get', Address2:' well', Gender:'male', Salary: 20000, Pincode:222222, UserType:'permanent'},
        { FirstName:'hello', MiddleName:'world2', LastName:'here', Address1:'getsoon', Address2:'get well', Gender:'female', Salary: 30000, Pincode:222222, UserType:'contract'},
        { FirstName:'hello', MiddleName:'world', LastName:'here', Address1:'get', Address2:' well', Gender:'male', Salary: 20000, Pincode:222222, UserType:'permanent'},
        { FirstName:'hello', MiddleName:'world2', LastName:'here', Address1:'getsoon', Address2:'get well', Gender:'female', Salary: 30000, Pincode:222222, UserType:'contract'},
    ]

    getEmployeeData(){
        return this.employees;
    }
    getFilteredEmployeeData(usertype:string){
        return this.employees.filter(e=>usertype===e.UserType)
    }
}