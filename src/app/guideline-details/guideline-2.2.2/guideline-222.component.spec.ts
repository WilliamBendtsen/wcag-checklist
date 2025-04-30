import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline222Component } from './guideline-222.component';

describe('Guideline222Component', () => {
  let component: Guideline222Component;
  let fixture: ComponentFixture<Guideline222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline222Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
