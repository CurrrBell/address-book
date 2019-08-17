import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-photo',
  templateUrl: './contact-photo.component.html',
  styleUrls: ['./contact-photo.component.scss']
})
export class ContactPhotoComponent implements OnInit {
  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

}
