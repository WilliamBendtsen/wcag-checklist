import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline135Component } from './guideline-135.component';

describe('Guideline135Component', () => {
  let component: Guideline135Component;
  let fixture: ComponentFixture<Guideline135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline135Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
