import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Contact } from '../types/contact';
import { SelectedContactService } from '../selected-contact/selected-contact.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  addContactForm: FormGroup;
  noDataMessage = 'No contacts to show';

  constructor(
    private readonly selectedContactService: SelectedContactService,
    private readonly formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.contacts = [
      {
        firstName: 'Alice',
        lastName: 'Glass',
        salutation: 'Ms.',
        profilePictureSrc: '../../../assets/contact-photos/contact-1.jpg',
        company: 'test',
        phoneNumbers: [
          { number: '5', type: 'Home' },
          { number: '7', type: 'Work' },
          { number: '9', type: 'Cell' }
        ],
        active: false
      },
      {
        firstName: 'Bob',
        lastName: 'Kraft',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-2.jpg',
        company: 'test',
        phoneNumbers: [
          { number: '5', type: 'Home' },
          { number: '7', type: 'Work' },
          { number: '9', type: 'Cell' }
        ],
        active: false
      },
      {
        firstName: 'Charlie',
        lastName: 'Sheen',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-3.jpg',
        company: 'test',
        phoneNumbers: [
          { number: '584-231-4848', type: 'Home' },
          { number: '7', type: 'Work' },
          { number: '9', type: 'Cell' },
          { number: '5', type: 'Home' },
          { number: '7', type: 'Work' },
          { number: '9', type: 'Cell' },
          { number: '5', type: 'Home' },
          { number: '7', type: 'Work' },
          { number: '9', type: 'Cell' }
        ],
        active: false
      },
      {
        firstName: 'Dan',
        lastName: 'Patrick',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-4.jpg',
        company: 'test',
        phoneNumbers: [
          { number: '5', type: 'Home' },
          { number: '7', type: 'Work' },
          { number: '9', type: 'Cell' }
        ],
        active: false
      },
      {
        firstName: 'Evan',
        lastName: 'Engram',
        salutation: 'Mr.',
        profilePictureSrc: '../../../assets/contact-photos/contact-5.jpg',
        company: 'test',
        phoneNumbers: [
          { number: '5', type: 'Home' },
          { number: '7', type: 'Work' },
          { number: '9', type: 'Cell' }
        ],
        active: false
      }
    ];
  }

  ngOnInit() {
    this.addContactForm = this.formBuilder.group({
      photo: [''],
      salutation: [''],
      firstName: [''],
      lastName: [''],
      company: [''],
      phone: [''],
    });

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

  onSubmit() {
    const formFields = this.addContactForm.controls;
    this.contacts.push({
      profilePictureSrc: formFields.photo.value === '' ? '../../../assets/contact-photos/default-profile.png' : formFields.photo.value,
      salutation: formFields.salutation.value,
      firstName: formFields.firstName.value,
      lastName: formFields.lastName.value,
      company: '',
      phoneNumbers: [formFields.phone.value],
      active: false
    });

    this.changeDetectorRef.detectChanges();
  }
}
