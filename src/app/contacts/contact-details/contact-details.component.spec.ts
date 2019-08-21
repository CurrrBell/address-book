import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPhotoComponent } from '../contact-photo/contact-photo.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailsComponent, ContactPhotoComponent],
      imports: [SharedModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty state with no data', () => {
    component.contact = null;
    fixture.detectChanges();

    const emptyState = fixture.nativeElement.querySelector('.empty-state');

    expect(emptyState).toBeTruthy();
  });

  it('should hide empty state with data', () => {
    component.contact = { firstName: '', lastName: '', salutation: '', company: '', phoneNumbers: [], profilePictureSrc: '', active: false };
    fixture.detectChanges();

    const emptyState = fixture.nativeElement.querySelector('.empty-state');

    expect(emptyState).toBeFalsy();
  });
});
