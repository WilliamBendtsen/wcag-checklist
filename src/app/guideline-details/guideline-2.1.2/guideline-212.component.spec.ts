import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline212Component } from './guideline-212.component';

describe('Guideline212Component', () => {
  let component: Guideline212Component;
  let fixture: ComponentFixture<Guideline212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline212Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
