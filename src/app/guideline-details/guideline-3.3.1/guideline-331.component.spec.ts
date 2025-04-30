import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline331Component } from './guideline-331.component';

describe('Guideline331Component', () => {
  let component: Guideline331Component;
  let fixture: ComponentFixture<Guideline331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline331Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
