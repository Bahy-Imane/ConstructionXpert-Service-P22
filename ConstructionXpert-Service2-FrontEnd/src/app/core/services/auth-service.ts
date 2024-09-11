import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CustomerDto} from "../Dto/customer-dto";
import {User} from "../model/user.model";
import {AdminDto} from "../Dto/admin-dto";
import {LoginUserDto} from "../Dto/login-user-dto";
import {LoginResponse} from "../Dto/login-response-dto";
import {Role} from "../enums/role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }


  CostumerSignUp(customerDTO: CustomerDto): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signup`, customerDTO);
  }


  adminSignUp(adminDTO: AdminDto): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/add-admin`, adminDTO);
  }

  login(loginUserDto: LoginUserDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginUserDto);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRole(): Role | null {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      return payload.personRole as Role;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
