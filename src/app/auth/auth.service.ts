import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string;

  constructor() { }

  authenticate(username: string, password: string): boolean {
    this.username = username;
    return true;
  }

  getUser(): string {
    return this.username;
  }
}
