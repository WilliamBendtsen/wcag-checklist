import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline413Component } from './guideline-413.component';

describe('Guideline413Component', () => {
  let component: Guideline413Component;
  let fixture: ComponentFixture<Guideline413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline413Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
