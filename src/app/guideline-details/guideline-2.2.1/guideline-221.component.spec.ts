import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline221Component } from './guideline-221.component';

describe('Guideline221Component', () => {
  let component: Guideline221Component;
  let fixture: ComponentFixture<Guideline221Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline221Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
