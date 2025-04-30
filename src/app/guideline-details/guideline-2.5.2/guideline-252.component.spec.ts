import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline252Component } from './guideline-252.component';

describe('Guideline252Component', () => {
  let component: Guideline252Component;
  let fixture: ComponentFixture<Guideline252Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline252Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
