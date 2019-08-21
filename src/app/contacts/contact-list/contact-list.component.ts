import { Component, OnInit } from '@angular/core';
import { Contact } from '../types/contact';
import { SelectedContactService } from '../services/selected-contact/selected-contact.service';
import { CreateContactService } from '../services/create-contact/create-contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  noDataMessage = 'No contacts to show';

  constructor(
    private readonly selectedContactService: SelectedContactService,
    private readonly createContactService: CreateContactService
  ) {
    this.contacts = [
      {
        firstName: 'Alice',
        lastName: 'Glass',
        salutation: 'Ms.',
        profilePictureSrc: '../../../assets/contact-photos/contact-1.jpg',
        company: 'AccuLynx',
        phoneNumbers: [
          { number: '5', type: 'Home', isPrimary: false },
          { number: '7', type: 'Work', isPrimary: false },
          { number: '9', type: 'Cell', isPrimary: false }
        ],
        active: false
      },
      {
        firstName: 'Bob',
        lastName: 'Kraft',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-2.jpg',
        company: 'AccuLynx',
        phoneNumbers: [
          { number: '5', type: 'Home', isPrimary: false },
          { number: '7', type: 'Work', isPrimary: false },
          { number: '9', type: 'Cell', isPrimary: false }
        ],
        active: false
      },
      {
        firstName: 'Charlie',
        lastName: 'Sheen',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-3.jpg',
        company: 'AccuLynx',
        phoneNumbers: [
          { number: '584-231-4848', type: 'Home', isPrimary: false },
          { number: '7', type: 'Work', isPrimary: false },
          { number: '9', type: 'Cell', isPrimary: false },
          { number: '5', type: 'Home', isPrimary: false },
          { number: '7', type: 'Work', isPrimary: false },
          { number: '9', type: 'Cell', isPrimary: false },
          { number: '5', type: 'Home', isPrimary: false },
          { number: '7', type: 'Work', isPrimary: false },
          { number: '9', type: 'Cell', isPrimary: false }
        ],
        active: false
      },
      {
        firstName: 'Dan',
        lastName: 'Patrick',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-4.jpg',
        company: 'AccuLynx',
        phoneNumbers: [
          { number: '5', type: 'Home', isPrimary: false },
          { number: '7', type: 'Work', isPrimary: false },
          { number: '9', type: 'Cell', isPrimary: false }
        ],
        active: false
      },
      {
        firstName: 'Evan',
        lastName: 'Engram',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-5.jpg',
        company: 'AccuLynx',
        phoneNumbers: [
          { number: '5', type: 'Home', isPrimary: false },
          { number: '7', type: 'Work', isPrimary: false },
          { number: '9', type: 'Cell', isPrimary: false }
        ],
        active: false
      }
    ];
  }

  ngOnInit() {
    this.createContactService.newContact()
      .subscribe(contact => {
        if (contact) {
          this.contacts.push(contact);
        }
      })

    this.selectedContactService.selectedContact()
      .subscribe(contact => {
        if (contact) {
          if (this.selectedContact) {
            this.selectedContact.active = false;
          }

          this.selectedContact = contact;
          this.selectedContact.active = true;
        }
      });
  }

  deleteContact(toDelete: Contact) {
    this.contacts = this.contacts.filter(item => {
      return item !== toDelete;
    })
  }
}
