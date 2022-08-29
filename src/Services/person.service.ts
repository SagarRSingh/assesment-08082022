import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

 export interface IPerson {
  Id:string;
  FirstName:string;
  MiddleName:string;
  LastName:string;
  Age:number;
  Address1:string;
  Address2:string;
  Gender:string;
  DOB:Date
}

@Injectable()
export class PersonServices {
  persons:IPerson[] = [];
  URLPath:string = 'api/person';
  constructor(private _httpClient:HttpClient){}

  getPersonListByApi():Observable<IPerson[]>{
    return this._httpClient.get<IPerson[]>(this.URLPath)
  }
  getPersonByApi(id:string){
    let temp = new ReplaySubject();
    this._httpClient.get<IPerson[]>(this.URLPath).subscribe(personList => {
      temp.next(personList.find(person => id === person.Id)!);
      temp.complete()
    })
    return temp
  }

  createEmployeeApi(emp:any){
    this._httpClient.post(this.URLPath,emp,{
      headers: new HttpHeaders({'Content-Type':'application/json'})
    })
  }

  updateEmployeeApi(emp:any){
    this._httpClient.put(`${this.URLPath}/update/${emp.Id}`, emp, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
  }

  deleteEmployeeApi(id:string){
    this._httpClient.delete(`${this.URLPath}/delete/${id}`)
  }

  getPersonsList(){
    return this.persons;
  }
  getPerson(id:string){
    return this.persons.find(e=>e.Id===id);
  }

  private handleError(errorResponse:HttpErrorResponse){
    console.log(errorResponse);

    if(errorResponse.error instanceof ErrorEvent) console.log(errorResponse.message) // client side error
    else console.log(errorResponse.message) // server side error

    
  }
}