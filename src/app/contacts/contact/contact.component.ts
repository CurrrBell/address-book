import { Component, OnInit, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { Contact } from '../types/contact';
import { SelectedContactService } from '../selected-contact/selected-contact.service';
import { ResponsiveService } from 'src/app/shared/responsive-service/responsive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @HostBinding('class.active') active = false;

  constructor(
    private readonly router: Router,
    private readonly selectedContactService: SelectedContactService,
    private readonly responsiveService: ResponsiveService
  ) { }

  ngOnInit() {
  }

  @HostListener('click')
  select() {
    this.selectedContactService.select(this.contact);

    if (this.responsiveService.isMobile()) {
      this.router.navigate(['details']);
    }
  }
}
