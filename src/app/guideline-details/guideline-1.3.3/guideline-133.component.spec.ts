import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline133Component } from './guideline-133.component';

describe('Guideline133Component', () => {
  let component: Guideline133Component;
  let fixture: ComponentFixture<Guideline133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline133Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
