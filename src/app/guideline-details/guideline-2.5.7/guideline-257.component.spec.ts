import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline257Component } from './guideline-257.component';

describe('Guideline257Component', () => {
  let component: Guideline257Component;
  let fixture: ComponentFixture<Guideline257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline257Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
