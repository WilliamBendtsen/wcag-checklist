import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline253Component } from './guideline-253.component';

describe('Guideline253Component', () => {
  let component: Guideline253Component;
  let fixture: ComponentFixture<Guideline253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline253Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
