import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline2411Component } from './guideline-2411.component';

describe('Guideline2411Component', () => {
  let component: Guideline2411Component;
  let fixture: ComponentFixture<Guideline2411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline2411Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline2411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
