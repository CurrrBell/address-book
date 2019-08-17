import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhotoComponent } from './contact-photo.component';

describe('ContactPhotoComponent', () => {
  let component: ContactPhotoComponent;
  let fixture: ComponentFixture<ContactPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
