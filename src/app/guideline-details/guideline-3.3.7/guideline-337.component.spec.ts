import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline337Component } from './guideline-337.component';

describe('Guideline337Component', () => {
  let component: Guideline337Component;
  let fixture: ComponentFixture<Guideline337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline337Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
