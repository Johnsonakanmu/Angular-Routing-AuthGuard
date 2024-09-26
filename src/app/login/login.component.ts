import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  logins!: Login[]
  rememberMe: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      id: new FormControl('0'),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      rememberMe: new FormControl(false)  // Remember me checkbox control

      
  })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // Proceed with login logic
    } else {
      console.log('Form is invalid');
    }
  }

}
