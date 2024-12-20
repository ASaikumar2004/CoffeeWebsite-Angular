import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccodianComponent } from './accodian.component';

describe('AccodianComponent', () => {
  let component: AccodianComponent;
  let fixture: ComponentFixture<AccodianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccodianComponent]
    });
    fixture = TestBed.createComponent(AccodianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
