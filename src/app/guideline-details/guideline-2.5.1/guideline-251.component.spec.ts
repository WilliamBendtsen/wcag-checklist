import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline251Component } from './guideline-251.component';

describe('Guideline251Component', () => {
  let component: Guideline251Component;
  let fixture: ComponentFixture<Guideline251Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline251Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
