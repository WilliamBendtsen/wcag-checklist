import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline1413Component } from './guideline-1413.component';

describe('Guideline1413Component', () => {
  let component: Guideline1413Component;
  let fixture: ComponentFixture<Guideline1413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline1413Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline1413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
