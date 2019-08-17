import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  test = '../../../assets/contact-photos/beautiful-bokeh-brunette-2726111.jpg';
  constructor() { }

  ngOnInit() {
  }

}
