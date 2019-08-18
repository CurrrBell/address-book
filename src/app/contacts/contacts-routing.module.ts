import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { MobileGuard } from '../guards/mobile/mobile.guard';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const routes: Routes = [
  { path: '', component: ContactsComponent, canActivate: [AuthGuard] },
  { path: 'details', component: ContactDetailsComponent, canActivate: [AuthGuard, MobileGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
