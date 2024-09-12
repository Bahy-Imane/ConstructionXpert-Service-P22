import { Routes } from '@angular/router';
import {ProjectListComponent} from "./component/project-list/project-list.component";
import {ProjectFormComponent} from "./component/project-form/project-form.component";

export const routes: Routes = [
  {path:'projects', component:ProjectListComponent},
  {path:'add', component:ProjectFormComponent},
  {path:'edit/:id', component:ProjectFormComponent},
  {path:'', component:ProjectListComponent}
];
