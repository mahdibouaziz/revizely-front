import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  /* Working with reactive form approach */

  errorUser = false;
  errorPass = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor() {}

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

    console.log(this.loginForm.value);
  }
}
