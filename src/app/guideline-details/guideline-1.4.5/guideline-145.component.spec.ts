import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline145Component } from './guideline-145.component';

describe('Guideline145Component', () => {
  let component: Guideline145Component;
  let fixture: ComponentFixture<Guideline145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline145Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
