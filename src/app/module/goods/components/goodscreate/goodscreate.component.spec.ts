import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodscreateComponent } from './goodscreate.component';

describe('GoodscreateComponent', () => {
  let component: GoodscreateComponent;
  let fixture: ComponentFixture<GoodscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
