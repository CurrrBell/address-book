import { Component, OnInit } from '@angular/core';
import { SelectedContactService } from '../selected-contact/selected-contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;
  constructor(private readonly selectedContactService: SelectedContactService) { }

  ngOnInit() {
    this.selectedContactService.selectedContact()
      .subscribe(contact => {
        if (contact) {
          this.contact = contact;
        }
      });
  }

}
