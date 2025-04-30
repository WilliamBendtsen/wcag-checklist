import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline246Component } from './guideline-246.component';

describe('Guideline246Component', () => {
  let component: Guideline246Component;
  let fixture: ComponentFixture<Guideline246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline246Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
