import { TestBed } from '@angular/core/testing';

import { SelectedContactService } from './selected-contact.service';

describe('SelectedContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedContactService = TestBed.get(SelectedContactService);
    expect(service).toBeTruthy();
  });
});
