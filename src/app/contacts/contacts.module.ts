import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactComponent } from './contact/contact.component';
import { ContactPhotoComponent } from './contact-photo/contact-photo.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './contacts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ContactComponent,
  ]
})
export class ContactsModule { }
