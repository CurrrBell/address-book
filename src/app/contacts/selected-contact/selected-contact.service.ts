import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../types/contact';

@Injectable({
  providedIn: 'root'
})
export class SelectedContactService {
  private readonly selectedContact$ = new BehaviorSubject<Contact>(null);

  constructor() { }

  select(contact: Contact) {
    this.selectedContact$.next(contact);
  }

  selectedContact() {
    return this.selectedContact$.asObservable();
  }
}
