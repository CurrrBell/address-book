import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactComponent } from './contact/contact.component';
import { ContactPhotoComponent } from './contact-photo/contact-photo.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactsComponent,
    ContactDetailsComponent,
    ContactComponent,
    ContactPhotoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContactComponent,
  ]
})
export class ContactsModule { }
