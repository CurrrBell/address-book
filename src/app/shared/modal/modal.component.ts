import { Component, OnInit, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();
  public visibleAnimate = false;
  @HostBinding('class.hidden') hidden = true;

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.hidden = false;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.hidden = true, 300);
  }

  submit(payload: any) {
    this.submitted.emit(payload);
  }

  @HostListener('click', ['$event'])
  onContainerClicked(event: MouseEvent): void {
    if ((event.target as HTMLElement).tagName === 'APP-MODAL') {
      this.hide();
    }
  }
}
