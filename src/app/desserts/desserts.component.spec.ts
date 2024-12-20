import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsComponent } from './desserts.component';

describe('DessertsComponent', () => {
  let component: DessertsComponent;
  let fixture: ComponentFixture<DessertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DessertsComponent]
    });
    fixture = TestBed.createComponent(DessertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
