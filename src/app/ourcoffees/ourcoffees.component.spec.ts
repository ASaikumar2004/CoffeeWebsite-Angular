import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcoffeesComponent } from './ourcoffees.component';

describe('OurcoffeesComponent', () => {
  let component: OurcoffeesComponent;
  let fixture: ComponentFixture<OurcoffeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurcoffeesComponent]
    });
    fixture = TestBed.createComponent(OurcoffeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
