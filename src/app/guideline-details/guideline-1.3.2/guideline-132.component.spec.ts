import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline132Component } from './guideline-132.component';

describe('Guideline132Component', () => {
  let component: Guideline132Component;
  let fixture: ComponentFixture<Guideline132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline132Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
