import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpTableComponent } from "./emp-table/emp-table.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PersonCardComponent } from "./person-card/person-card.component";

const routes:Routes = [
    {path: 'employee', component:EmployeeComponent},
    {path: 'person/:id', component: PersonCardComponent},
    {path: 'employee-list', component:EmployeeListComponent},
    {path: 'emp-table', component:EmpTableComponent},
    {path:'', redirectTo:'employee', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}