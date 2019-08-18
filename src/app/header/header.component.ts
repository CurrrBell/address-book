import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  userSettingsForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.username = this.authService.getUser();
    this.userSettingsForm = this.formBuilder.group({
      username: [this.username]
    });
  }

  onSubmit() {
    this.username = this.userSettingsForm.controls.username.value;
  }

}
