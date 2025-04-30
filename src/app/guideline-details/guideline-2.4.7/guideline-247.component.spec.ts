import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline247Component } from './guideline-247.component';

describe('Guideline247Component', () => {
  let component: Guideline247Component;
  let fixture: ComponentFixture<Guideline247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline247Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
