import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {
        firstName: 'alice',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }]
      },
      {
        firstName: 'alice',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }]
      },
      {
        firstName: 'alice',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }]
      }
    ];
  }

  ngOnInit() {
  }

}
