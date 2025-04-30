import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline332Component } from './guideline-332.component';

describe('Guideline332Component', () => {
  let component: Guideline332Component;
  let fixture: ComponentFixture<Guideline332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline332Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
