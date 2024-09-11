import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth-service";
import {Router} from "@angular/router";
import {LoginUserDto} from "../../core/Dto/login-user-dto";
import {MatCard} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  success = false;
  failure = false;
  emailErrorMessage: string | null = null;
  loginForm: FormGroup;


  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      userNameOrEmail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  login(submitData: FormGroup) {
    this.success = false;
    this.failure = false;
    this.emailErrorMessage = null;

    const loginUserDto: LoginUserDto = {
      userNameOrEmail: submitData.value.userNameOrEmail,
      password: submitData.value.password,
    };


    this.authService.login(loginUserDto).subscribe({
      next: (response) => {
        if (response.token) {
          this.success = true;
          console.log(response.token)
          localStorage.setItem('accessToken', response.token);

          const decodedToken: any = jwt_decode(response.token);
          const userRole = decodedToken.role;

          if (userRole === "ADMIN") {
            this.router.navigate(['/admin-dashboard']);
          } else if (userRole === "CUSTOMER") {
            this.router.navigate(['/customerHome']);
          }
        } else {
          this.failure = true;
          this.emailErrorMessage = 'Login failed. Invalid response from server.';
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        this.failure = true;
        this.emailErrorMessage = 'Login failed. Please check your credentials and try again.';
      }
    });
  }


}
