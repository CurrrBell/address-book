import { TestBed } from '@angular/core/testing';

import { CreateContactService } from './create-contact.service';

describe('CreateContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateContactService = TestBed.get(CreateContactService);
    expect(service).toBeTruthy();
  });
});
