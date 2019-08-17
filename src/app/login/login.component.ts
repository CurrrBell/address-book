import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService) { }

  ngOnInit() {
    const passwordValidators = [
      // Validators.required
    ];
    const usernameValidators = [
      // Validators.required
    ];

    this.loginForm = this.formBuilder.group({
      username: ['', usernameValidators],
      password: ['', passwordValidators]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.login(
      this.loginForm.controls.username.value,
      this.loginForm.controls.password.value
    );
  }

  login(username: string, password: string) {
    this.authService.authenticate(username, password);
    this.router.navigate(['']);
  }
}
