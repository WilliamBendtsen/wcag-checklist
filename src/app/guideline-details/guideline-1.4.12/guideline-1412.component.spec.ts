import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline1412Component } from './guideline-1412.component';

describe('Guideline1412Component', () => {
  let component: Guideline1412Component;
  let fixture: ComponentFixture<Guideline1412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline1412Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline1412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
