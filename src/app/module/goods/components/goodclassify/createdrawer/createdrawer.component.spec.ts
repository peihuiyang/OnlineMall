import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedrawerComponent } from './createdrawer.component';

describe('CreatedrawerComponent', () => {
  let component: CreatedrawerComponent;
  let fixture: ComponentFixture<CreatedrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
