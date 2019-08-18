import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ListComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    ModalComponent
  ]
})
export class SharedModule { }
