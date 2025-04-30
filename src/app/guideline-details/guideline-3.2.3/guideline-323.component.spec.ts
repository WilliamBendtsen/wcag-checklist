import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline323Component } from './guideline-323.component';

describe('Guideline323Component', () => {
  let component: Guideline323Component;
  let fixture: ComponentFixture<Guideline323Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline323Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
