import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string;
  private authenticated$: BehaviorSubject<boolean>;

  constructor() {
    this.authenticated$ = new BehaviorSubject(false);

  }

  authenticate(username: string, password: string): boolean {
    this.username = username;
    this.authenticated$.next(true);

    return true;
  }

  getUser(): string {
    if (this.username === undefined) {
      return 'username';
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
