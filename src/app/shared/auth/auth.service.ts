import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string;
  private authenticated$: BehaviorSubject<boolean>;

  constructor() {
    this.authenticated$ = new BehaviorSubject(true);

  }

  authenticate(username: string, password: string): boolean {
    this.username = username;

    // * make actual call to fancy auth web service

    this.authenticated$.next(true);

    return true;
  }

  getUser(): string {
    if (this.username === undefined) {
      return 'Username';
    }
    return this.username;
  }

  authenticated(): BehaviorSubject<boolean> {
    return this.authenticated$;
  }

  isAuthenticated(): boolean {
    return this.authenticated$.value;
  }
}
