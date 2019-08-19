import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { ResponsiveService } from './shared/responsive-service/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  authenticated = false;

  constructor(
    private readonly authService: AuthService,
    private readonly responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.authService.authenticated().subscribe(isAuth => {
      this.authenticated = isAuth;
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.responsiveService.checkWidth();
  }
}
