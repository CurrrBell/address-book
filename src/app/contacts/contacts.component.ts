import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../shared/responsive-service/responsive.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  isMobile: boolean;

  constructor(private readonly responsiveService: ResponsiveService) { }

  ngOnInit() {
    this.responsiveService.mobile().subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

}
