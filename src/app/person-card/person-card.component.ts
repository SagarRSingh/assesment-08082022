import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, } from "@angular/router";
import { PersonServices } from "src/Services/person.service";

@Component({
  selector:'person-card',
  templateUrl: './person-card.component.html',
  providers: [PersonServices]
})
export class PersonCardComponent implements OnInit {
  person:any={}
  required:string = '';
  optional:any;
  query:any;

  constructor(private _route:ActivatedRoute, private _router:Router, private personServices:PersonServices){}

  ngOnInit(): void {
    // this.person = this.personServices.getPerson(this._route.snapshot.paramMap.get('id')!)
    this.required = this._route.snapshot.paramMap.get('id')!;
    let tempId = this.required;
    
    // to filter data in component
    // this.personServices.getPersonListByApi().subscribe(personList => {
    //   this.person = personList.find(person=>tempId===person.Id)
    // })

    // to filter data in service
    this.personServices.getPersonByApi(tempId).subscribe(emp=>this.person=emp)

    this.optional = this._route.snapshot.paramMap.get('code');
    this.query = this._route.snapshot.queryParamMap.keys;
  }

  preserve(){
    this._router.navigate(['/employee-list'], {queryParams: {pcode: 'HNM'},queryParamsHandling:'preserve'})
  }
  
  
}