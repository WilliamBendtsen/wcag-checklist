import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline412Component } from './guideline-412.component';

describe('Guideline412Component', () => {
  let component: Guideline412Component;
  let fixture: ComponentFixture<Guideline412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline412Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
