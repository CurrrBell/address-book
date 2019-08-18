import { Component, OnInit } from '@angular/core';
import { SelectedContactService } from '../selected-contact/selected-contact.service';
import { Contact } from '../contact';
import { ResponsiveService } from 'src/app/shared/responsive-service/responsive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  isMobile: boolean;

  constructor(
    private readonly router: Router,
    private readonly selectedContactService: SelectedContactService,
    private readonly responsiveService: ResponsiveService
  ) { }

  ngOnInit() {
    this.selectedContactService.selectedContact()
      .subscribe(contact => {
        if (contact) {
          this.contact = contact;
        }
      });

    this.responsiveService.mobile()
      .subscribe(isMobile => {
        this.isMobile = isMobile;
      });
  }

  goBack() {
    this.router.navigate(['']);
  }

}
