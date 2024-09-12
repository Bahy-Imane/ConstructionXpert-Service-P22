import { Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {Role} from "./core/enums/role";
import {RoleGuard} from "./core/services/role-guard";
import {AuthGuard} from "./core/services/auth-guard";
import {AdminDashboardComponent} from "./component/admin-dashboard/admin-dashboard.component";
import {CustomerDashboardComponent} from "./component/customer-dashboard/customer-dashboard.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
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
  }


]
