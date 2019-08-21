import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactPhotoComponent } from './contact-photo/contact-photo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsComponent, ContactListComponent, ContactDetailsComponent, ContactComponent, CreateContactComponent, ContactPhotoComponent],
      imports: [SharedModule, FormsModule, ReactiveFormsModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show ContactDetails on desktop', () => {
    component.isMobile = false;
    fixture.detectChanges();

    const contactDetails = fixture.nativeElement.querySelector('app-contact-details');

    expect(contactDetails).toBeTruthy();
  })

  it('should hide ContactDetails on mobile', () => {
    component.isMobile = true;
    fixture.detectChanges();

    const contactDetails = fixture.nativeElement.querySelector('app-contact-details');

    expect(contactDetails).toBeFalsy();
  });
});
