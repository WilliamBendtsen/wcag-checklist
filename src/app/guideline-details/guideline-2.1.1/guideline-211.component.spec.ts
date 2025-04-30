import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guideline211Component } from './guideline-211.component';

describe('Guideline211Component', () => {
  let component: Guideline211Component;
  let fixture: ComponentFixture<Guideline211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guideline211Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guideline211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
