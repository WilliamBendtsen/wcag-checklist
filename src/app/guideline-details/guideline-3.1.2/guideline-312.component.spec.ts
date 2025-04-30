import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline312Component } from './guideline-312.component';

describe('Guideline312Component', () => {
  let component: Guideline312Component;
  let fixture: ComponentFixture<Guideline312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline312Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
