import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline243Component } from './guideline-243.component';

describe('Guideline243Component', () => {
  let component: Guideline243Component;
  let fixture: ComponentFixture<Guideline243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline243Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
