import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should not authenticate a null/empty user', () => {
    const service: AuthService = TestBed.get(AuthService);

    const nullAuthenticated = service.authenticate(null, null);
    const emptyAuthenticated = service.authenticate('', '');

    expect(nullAuthenticated).toBe(false);
    expect(emptyAuthenticated).toBe(false);
  })
});
