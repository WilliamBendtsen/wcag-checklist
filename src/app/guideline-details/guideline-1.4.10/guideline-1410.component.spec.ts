import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline1410Component } from './guideline-1410.component';

describe('Guideline1410Component', () => {
  let component: Guideline1410Component;
  let fixture: ComponentFixture<Guideline1410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline1410Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline1410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
