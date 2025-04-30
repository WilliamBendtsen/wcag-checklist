import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline1411Component } from './guideline-1411.component';

describe('Guideline1411Component', () => {
  let component: Guideline1411Component;
  let fixture: ComponentFixture<Guideline1411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline1411Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline1411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
