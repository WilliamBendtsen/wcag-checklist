import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline322Component } from './guideline-322.component';

describe('Guideline322Component', () => {
  let component: Guideline322Component;
  let fixture: ComponentFixture<Guideline322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline322Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
