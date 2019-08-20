import { Injectable } from '@angular/core';
import { Contact } from '../../types/contact';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateContactService {
  private contact$ = new BehaviorSubject<Contact>(null);

  constructor() { }

  create(contact: Contact) {
    this.contact$.next(contact);
  }

  newContact(){
    return this.contact$.asObservable();
  }
}
