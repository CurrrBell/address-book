import { Component, OnInit } from '@angular/core';
import { Contact } from '../types/contact';
import { SelectedContactService } from '../selected-contact/selected-contact.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  addContactForm: FormGroup;
  submitted = false;
  noDataMessage = 'No contacts to show';

  constructor(
    private readonly selectedContactService: SelectedContactService,
    private readonly formBuilder: FormBuilder
  ) {
    this.contacts = [
      {
        firstName: 'Alice',
        lastName: 'Glass',
        salutation: 'Ms.',
        profilePictureSrc: '../../../assets/contact-photos/contact-1.jpg',
        company: 'test',
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
        company: 'test',
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
        company: 'test',
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
        company: 'test',
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
        company: 'test',
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
    this.initForm();

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

  get phoneNumbers() {
    return this.addContactForm.get('phoneNumbers') as FormArray;
  }

  get phoneNumberTypes() {
    return ['Home', 'Work', 'Cell'];
  }

  initForm() {
    this.submitted = false;
    this.addContactForm = this.formBuilder.group({
      photo: [''],
      salutation: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: [''],
      phoneNumbers: this.formBuilder.array([
        this.createPhoneNumber()
      ])
    });
  }

  createPhoneNumber() {
    return this.formBuilder.group({ number: [''], type: [''], isPrimary: false });
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.createPhoneNumber());
  }

  onSubmit() {
    this.submitted = true;

    if (this.addContactForm.invalid) {
      return;
    }

    const formFields = this.addContactForm.controls;
    console.log(formFields);
    this.contacts.push({
      profilePictureSrc: formFields.photo.value === '' ? '../../../assets/contact-photos/default-profile.png' : formFields.photo.value,
      salutation: formFields.salutation.value,
      firstName: formFields.firstName.value,
      lastName: formFields.lastName.value,
      company: formFields.company.value,
      phoneNumbers: formFields.phoneNumbers['controls'].map(item => item.value),
      active: false
    });

    this.initForm();
  }
}
