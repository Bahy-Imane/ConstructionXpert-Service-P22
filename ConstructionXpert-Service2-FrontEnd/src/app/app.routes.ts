import { Routes } from '@angular/router';
import {ProjectListComponent} from "./component/project/project-list/project-list.component";
import {ProjectFormComponent} from "./component/project/project-form/project-form.component";
import {TaskeListComponent} from "./component/task/taske-list/taske-list.component";
import {TaskeFormComponent} from "./component/task/taske-form/taske-form.component";

export const routes: Routes = [
  {path:'projects', component:ProjectListComponent},
  {path:'add', component:ProjectFormComponent},
  {path:'edit/:id', component:ProjectFormComponent},


  {path:'tasks', component:TaskeListComponent},
  {path:'addTask', component:TaskeFormComponent},
  {path:'editTask/:id', component:TaskeFormComponent},
  {path:'', component:TaskeListComponent}
];
