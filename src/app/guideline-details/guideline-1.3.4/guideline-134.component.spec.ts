import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline134Component } from './guideline-134.component';

describe('Guideline134Component', () => {
  let component: Guideline134Component;
  let fixture: ComponentFixture<Guideline134Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline134Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
