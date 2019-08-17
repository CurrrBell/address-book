import { Component, OnInit, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { SelectedContactService } from '../selected-contact/selected-contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @HostBinding('class.active') active = false;

  constructor(private readonly selectedContactService: SelectedContactService) {
  }

  ngOnInit() {
  }

  @HostListener('click')
  select() {
    this.selectedContactService.select(this.contact);
  }
}
