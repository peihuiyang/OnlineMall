import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifydrawerComponent } from './modifydrawer.component';

describe('ModifydrawerComponent', () => {
  let component: ModifydrawerComponent;
  let fixture: ComponentFixture<ModifydrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifydrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifydrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
