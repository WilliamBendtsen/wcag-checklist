import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline258Component } from './guideline-258.component';

describe('Guideline258Component', () => {
  let component: Guideline258Component;
  let fixture: ComponentFixture<Guideline258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline258Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
