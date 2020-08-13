import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacontentComponent } from './datacontent.component';

describe('DatacontentComponent', () => {
  let component: DatacontentComponent;
  let fixture: ComponentFixture<DatacontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
