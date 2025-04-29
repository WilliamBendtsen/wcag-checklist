import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline111Component } from './guideline-111.component';

describe('Guideline111Component', () => {
  let component: Guideline111Component;
  let fixture: ComponentFixture<Guideline111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline111Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
