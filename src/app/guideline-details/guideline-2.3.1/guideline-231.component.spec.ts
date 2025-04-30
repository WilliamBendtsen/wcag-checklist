import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline231Component } from './guideline-231.component';

describe('Guideline231Component', () => {
  let component: Guideline231Component;
  let fixture: ComponentFixture<Guideline231Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline231Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
