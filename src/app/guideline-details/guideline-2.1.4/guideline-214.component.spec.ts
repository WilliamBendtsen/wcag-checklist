import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline214Component } from './guideline-214.component';

describe('Guideline214Component', () => {
  let component: Guideline214Component;
  let fixture: ComponentFixture<Guideline214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline214Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
