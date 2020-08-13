import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightheaderComponent } from './rightheader.component';

describe('RightheaderComponent', () => {
  let component: RightheaderComponent;
  let fixture: ComponentFixture<RightheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
