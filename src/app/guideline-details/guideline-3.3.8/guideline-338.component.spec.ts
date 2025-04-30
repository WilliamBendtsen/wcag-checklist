import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline338Component } from './guideline-338.component';

describe('Guideline338Component', () => {
  let component: Guideline338Component;
  let fixture: ComponentFixture<Guideline338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline338Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
