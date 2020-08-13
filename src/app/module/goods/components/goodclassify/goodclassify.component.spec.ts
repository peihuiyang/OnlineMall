import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodclassifyComponent } from './goodclassify.component';

describe('GoodclassifyComponent', () => {
  let component: GoodclassifyComponent;
  let fixture: ComponentFixture<GoodclassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodclassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodclassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
