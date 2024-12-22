import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courosel1Component } from './courosel1.component';

describe('Courosel1Component', () => {
  let component: Courosel1Component;
  let fixture: ComponentFixture<Courosel1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Courosel1Component]
    });
    fixture = TestBed.createComponent(Courosel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
