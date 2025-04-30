import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline245Component } from './guideline-245.component';

describe('Guideline245Component', () => {
  let component: Guideline245Component;
  let fixture: ComponentFixture<Guideline245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline245Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
