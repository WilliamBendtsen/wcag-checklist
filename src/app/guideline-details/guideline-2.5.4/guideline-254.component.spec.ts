import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline254Component } from './guideline-254.component';

describe('Guideline254Component', () => {
  let component: Guideline254Component;
  let fixture: ComponentFixture<Guideline254Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline254Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
