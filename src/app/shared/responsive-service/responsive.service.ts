import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private mobile$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.checkWidth();
  }

  mobile(): Observable<boolean> {
    return this.mobile$.asObservable();
  }

  isMobile(): boolean {
    return this.mobile$.value;
  }

  checkWidth(): void {
    // * only fire the observables if it's a _change_ to isMobile
    if (window.innerWidth <= 768 && this.mobile$.value === false) {
      this.mobile$.next(true);
    } else if (window.innerWidth > 768 && this.mobile$.value === true) {
      this.mobile$.next(false);
    }
  }
}
