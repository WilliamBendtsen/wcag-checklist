import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline144Component } from './guideline-144.component';

describe('Guideline144Component', () => {
  let component: Guideline144Component;
  let fixture: ComponentFixture<Guideline144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline144Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
