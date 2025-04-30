import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline241Component } from './guideline-241.component';

describe('Guideline241Component', () => {
  let component: Guideline241Component;
  let fixture: ComponentFixture<Guideline241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline241Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
