import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactComponent } from '../contact/contact.component';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { ContactPhotoComponent } from '../contact-photo/contact-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent, ContactComponent, CreateContactComponent, ContactPhotoComponent],
      imports: [SharedModule, FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
