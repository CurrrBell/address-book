import { Component, OnInit, Input, TemplateRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() readonly itemTemplate: TemplateRef<any>;
  @Input() readonly noDataMessage = 'No data';
  @HostBinding('class') class = 'list';

  constructor() { }

  ngOnInit() {
  }

}
