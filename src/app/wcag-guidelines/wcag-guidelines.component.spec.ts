import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcagGuidelinesComponent } from './wcag-guidelines.component';

describe('WcagGuidelinesComponent', () => {
  let component: WcagGuidelinesComponent;
  let fixture: ComponentFixture<WcagGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WcagGuidelinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WcagGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
