import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftsiderComponent } from './leftsider.component';

describe('LeftsiderComponent', () => {
  let component: LeftsiderComponent;
  let fixture: ComponentFixture<LeftsiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftsiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
