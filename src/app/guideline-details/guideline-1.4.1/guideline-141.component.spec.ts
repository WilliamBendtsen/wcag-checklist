import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline141Component } from './guideline-141.component';

describe('Guideline141Component', () => {
  let component: Guideline141Component;
  let fixture: ComponentFixture<Guideline141Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline141Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
