import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class AllDataApiService implements InMemoryDbService{
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    return {
      person:[
        {id: 1, Id: '1',FirstName: 'hello', MiddleName: 'Wor', LastName:'ld', Age: 20, Gender: 'male', DOB: new Date(2005,2,20), Address1: 'primaty', Address2: 'secondary'},
        {id: 2, Id: '2',FirstName: 'Ganesh', MiddleName: 'Wor', LastName:'ld', Age: 12, Gender: 'male', DOB: new Date(2005,2,20), Address1: 'addres', Address2: 'secondary'},
        {id: 3, Id: '3',FirstName: 'kartik', MiddleName: 'Wor', LastName:'dfld', Age: 15, Gender: 'male', DOB: new Date(2005,2,20), Address1: 'somthy', Address2: 'secondary'},
        {id: 4, Id: '4',FirstName: 'Shiv', MiddleName: 'Wor', LastName:'ldd', Age: 29, Gender: 'male', DOB: new Date(2005,2,20), Address1: 'somaty', Address2: 'secondary'},
        {id: 5, Id: '5',FirstName: 'nandi', MiddleName: 'Wor', LastName:'ld', Age: 28, Gender: 'male', DOB: new Date(2005,2,20), Address1: 'helly', Address2: 'secondary'},
        {id: 6, Id: '6',FirstName: 'nandi', MiddleName: 'Wor', LastName:'ld', Age: 28, Gender: 'male', DOB: new Date(2005,2,20), Address1: 'helly', Address2: 'secondary'},
        {id: 7, Id: '7',FirstName: 'nandi', MiddleName: 'Wor', LastName:'ld', Age: 28, Gender: 'male', DOB: new Date(2005,2,20), Address1: 'helly', Address2: 'secondary'},
      ],
    }
  }
}