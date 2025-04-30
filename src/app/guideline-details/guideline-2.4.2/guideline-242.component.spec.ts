import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline242Component } from './guideline-242.component';

describe('Guideline242Component', () => {
  let component: Guideline242Component;
  let fixture: ComponentFixture<Guideline242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline242Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
