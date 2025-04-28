import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffResourcesComponent } from './staff-resources.component';

describe('StaffResourcesComponent', () => {
  let component: StaffResourcesComponent;
  let fixture: ComponentFixture<StaffResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
