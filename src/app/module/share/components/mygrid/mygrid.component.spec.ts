import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygridComponent } from './mygrid.component';

describe('MygridComponent', () => {
  let component: MygridComponent;
  let fixture: ComponentFixture<MygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
