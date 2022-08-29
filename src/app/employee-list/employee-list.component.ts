import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PersonServices } from "src/Services/person.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  providers:[PersonServices]
})

export class EmployeeListComponent implements OnInit{
  employeeList:any = [];

  constructor(private _router:Router, private personService:PersonServices){
  }
  ngOnInit(): void {
    // this.employeeList = this.personService.getPersonsList();
    this.personService.getPersonListByApi().subscribe(personList=>{
      this.employeeList = personList;
    })
  }

  navigateReq(id:string){
    this._router.navigate(['/person', id])
  }
  navigateOpt(id:string,data:string){
    this._router.navigate(['/person', id, {code: data}])
  }
  navigateQuery(obj:any){
    this._router.navigate(['/person', obj.Id],{queryParams:{ name: obj.FirstName, id:obj.Id, age:obj.Age}})
  }

  mergeQuery(){
    this._router.navigate(['/person', 1],{queryParams:{ecode:'helcl'}, queryParamsHandling:'merge'})
  }

}