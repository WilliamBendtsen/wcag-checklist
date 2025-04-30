import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline131Component } from './guideline-131.component';

describe('Guideline131Component', () => {
  let component: Guideline131Component;
  let fixture: ComponentFixture<Guideline131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline131Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
