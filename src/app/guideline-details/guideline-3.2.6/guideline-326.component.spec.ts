import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline326Component } from './guideline-326.component';

describe('Guideline326Component', () => {
  let component: Guideline326Component;
  let fixture: ComponentFixture<Guideline326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline326Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
