import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorUser = false;
  errorPass = false;
  errorEmail = false;
  errorFirstname = false;
  errorLastname = false;
  errorPhone = false;

  errorMessage: string = '';
  isErrorMessage = false;

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    if (!this.registerForm.valid) {
      if (!this.registerForm.get('username')?.valid) {
        // console.log('username Not valid');
        this.errorUser = true;
        setTimeout(() => {
          this.errorUser = false;
        }, 5000);
      }

      if (!this.registerForm.get('email')?.valid) {
        // console.log('password Not valid');
        this.errorEmail = true;
        setTimeout(() => {
          this.errorEmail = false;
        }, 5000);
      }

      if (!this.registerForm.get('password')?.valid) {
        // console.log('password Not valid');
        this.errorPass = true;
        setTimeout(() => {
          this.errorPass = false;
        }, 5000);
      }

      if (!this.registerForm.get('firstName')?.valid) {
        // console.log('password Not valid');
        this.errorFirstname = true;
        setTimeout(() => {
          this.errorFirstname = false;
        }, 5000);
      }

      if (!this.registerForm.get('lastName')?.valid) {
        // console.log('password Not valid');
        this.errorLastname = true;
        setTimeout(() => {
          this.errorLastname = false;
        }, 5000);
      }

      if (!this.registerForm.get('telephone')?.valid) {
        // console.log('password Not valid');
        this.errorPhone = true;
        setTimeout(() => {
          this.errorPhone = false;
        }, 5000);
      }

      return;
    }

    // console.log(this.registerForm.value);

    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isErrorMessage = true;
        setTimeout(() => {
          this.isErrorMessage = false;
        }, 5000);
        console.log(error);
      }
    );
  }
}
