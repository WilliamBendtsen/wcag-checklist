import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline244Component } from './guideline-244.component';

describe('Guideline244Component', () => {
  let component: Guideline244Component;
  let fixture: ComponentFixture<Guideline244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline244Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
