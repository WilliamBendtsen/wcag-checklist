import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline321Component } from './guideline-321.component';

describe('Guideline321Component', () => {
  let component: Guideline321Component;
  let fixture: ComponentFixture<Guideline321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline321Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
