import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmintComponent } from './aboutmint.component';

describe('AboutmintComponent', () => {
  let component: AboutmintComponent;
  let fixture: ComponentFixture<AboutmintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutmintComponent]
    });
    fixture = TestBed.createComponent(AboutmintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
