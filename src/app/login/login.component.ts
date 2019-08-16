import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly router: Router, private readonly authService: AuthService) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.authService.authenticate('derp', 'magerp');
    this.router.navigate(['']);
  }
}
