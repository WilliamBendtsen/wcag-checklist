import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline143Component } from './guideline-143.component';

describe('Guideline143Component', () => {
  let component: Guideline143Component;
  let fixture: ComponentFixture<Guideline143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline143Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
