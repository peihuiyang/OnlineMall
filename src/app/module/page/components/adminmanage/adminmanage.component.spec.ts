import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanageComponent } from './adminmanage.component';

describe('AdminmanageComponent', () => {
  let component: AdminmanageComponent;
  let fixture: ComponentFixture<AdminmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
