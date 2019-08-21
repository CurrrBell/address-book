import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty state', () => {
    component.data = [];
    fixture.detectChanges();

    const emptyState = fixture.nativeElement.querySelector('.empty-message');

    expect(emptyState).toBeTruthy();
  });

  it('should hide empty state when given data', () => {
    component.data = ['thing'];
    fixture.detectChanges();

    const emptyState = fixture.nativeElement.querySelector('.empty-message');

    expect(emptyState).toBeFalsy();
  })
});
