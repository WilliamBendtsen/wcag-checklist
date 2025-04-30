import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline324Component } from './guideline-324.component';

describe('Guideline324Component', () => {
  let component: Guideline324Component;
  let fixture: ComponentFixture<Guideline324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline324Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
