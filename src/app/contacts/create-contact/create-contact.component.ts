import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { CreateContactService } from '../services/create-contact/create-contact.service';
import { Contact } from '../types/contact';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent;
  addContactForm: FormGroup;
  submitted = false;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly createContactService: CreateContactService
  ) { }

  ngOnInit() {
    this.initForm();
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

  show() {
    this.modal.show();
  }

  hide() {
    this.modal.hide();
  }

  onSubmit() {
    this.submitted = true;

    if (this.addContactForm.invalid) {
      return;
    }

    const formFields = this.addContactForm.controls;
    this.createContactService.create({
      profilePictureSrc: formFields.photo.value === '' ? '../../../assets/contact-photos/default-profile.png' : formFields.photo.value,
      salutation: formFields.salutation.value,
      firstName: formFields.firstName.value,
      lastName: formFields.lastName.value,
      company: formFields.company.value,
      phoneNumbers: formFields.phoneNumbers['controls'].map(item => item.value),
      active: false
    } as Contact);

    this.initForm();
  }
}
