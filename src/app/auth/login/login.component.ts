import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /* Working with reactive form approach */

  errorUser = false;
  errorPass = false;
  credentialsError = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (!this.loginForm.valid) {
      if (!this.loginForm.get('username')?.valid) {
        // console.log('username Not valid');
        this.errorUser = true;
        setTimeout(() => {
          this.errorUser = false;
        }, 3000);
      }

      if (!this.loginForm.get('password')?.valid) {
        // console.log('password Not valid');
        this.errorPass = true;
        setTimeout(() => {
          this.errorPass = false;
        }, 3000);
      }
      return;
    }

    // console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (result) => {
        console.log(result);
        const access_token = result.access_token;
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.credentialsError = true;
        setTimeout(() => {
          this.credentialsError = false;
        }, 3000);
      }
    );
  }
}
