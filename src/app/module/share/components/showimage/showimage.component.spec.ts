import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowimageComponent } from './showimage.component';

describe('ShowimageComponent', () => {
  let component: ShowimageComponent;
  let fixture: ComponentFixture<ShowimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
