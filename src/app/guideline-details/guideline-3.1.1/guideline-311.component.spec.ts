import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline311Component } from './guideline-311.component';

describe('Guideline311Component', () => {
  let component: Guideline311Component;
  let fixture: ComponentFixture<Guideline311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline311Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
