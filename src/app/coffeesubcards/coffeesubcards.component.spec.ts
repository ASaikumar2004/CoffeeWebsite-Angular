import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeesubcardsComponent } from './coffeesubcards.component';

describe('CoffeesubcardsComponent', () => {
  let component: CoffeesubcardsComponent;
  let fixture: ComponentFixture<CoffeesubcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeesubcardsComponent]
    });
    fixture = TestBed.createComponent(CoffeesubcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
