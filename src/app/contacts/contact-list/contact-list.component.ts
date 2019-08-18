import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Contact } from '../contact';
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

  constructor(
    private readonly selectedContactService: SelectedContactService,
    private readonly formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    this.contacts = [
      {
        firstName: 'Alice',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '../../../assets/contact-photos/contact-1.jpg',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }],
        active: false
      },
      {
        firstName: 'Bob',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '../../../assets/contact-photos/contact-2.jpg',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }],
        active: false
      },
      {
        firstName: 'Charlie',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '../../../assets/contact-photos/contact-3.jpg',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }],
        active: false
      },
      {
        firstName: 'Dan',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '../../../assets/contact-photos/contact-4.jpg',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }],
        active: false
      },
      {
        firstName: 'Evan',
        lastName: 'test',
        salutation: 'ms',
        profilePictureSrc: '../../../assets/contact-photos/contact-5.jpg',
        company: 'acculynx',
        phoneNumbers: [{ number: '5', type: 'home' }],
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
