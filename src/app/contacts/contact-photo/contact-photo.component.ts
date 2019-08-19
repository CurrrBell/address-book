import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-contact-photo',
  templateUrl: './contact-photo.component.html',
  styleUrls: ['./contact-photo.component.scss']
})
export class ContactPhotoComponent implements OnInit {
  @Input() readonly src: string;
  @HostBinding('class') class = 'contact-photo';

  constructor() { }

  ngOnInit() {
  }

}
