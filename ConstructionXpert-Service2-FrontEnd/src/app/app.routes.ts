import { Routes } from '@angular/router';

import {ProjectListComponent} from "./component/project/project-list/project-list.component";
import {ProjectFormComponent} from "./component/project/project-form/project-form.component";
import {TaskeListComponent} from "./component/task/taske-list/taske-list.component";
import {TaskeFormComponent} from "./component/task/taske-form/taske-form.component";

import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {Role} from "./core/enums/role";
import {RoleGuard} from "./core/services/role-guard";
import {AuthGuard} from "./core/services/auth-guard";
import {AdminDashboardComponent} from "./component/admin-dashboard/admin-dashboard.component";
import {CustomerDashboardComponent} from "./component/customer-dashboard/customer-dashboard.component";
import {ProjectFormComponent} from "./component/project-form/project-form.component";
import {ProjectListComponent} from "./component/project-list/project-list.component";
import {SignUpComponent} from "./component/sign-up/sign-up.component";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent},
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: Role.ADMIN }
  },
  {
    path: 'customer-dashboard',
    component: CustomerDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { expectedRole: Role.CUSTOMER }
  },

  {path:'projects', component:ProjectListComponent},
  {path:'add', component:ProjectFormComponent},
  {path:'edit/:id', component:ProjectFormComponent},


  {path:'tasks', component:TaskeListComponent},
  {path:'addTask', component:TaskeFormComponent},
  {path:'editTask/:id', component:TaskeFormComponent},
  {path:'', component:TaskeListComponent}
];
