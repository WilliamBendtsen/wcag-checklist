import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsAndPrintersComponent } from './locations-and-printers.component';

describe('LocationsAndPrintersComponent', () => {
  let component: LocationsAndPrintersComponent;
  let fixture: ComponentFixture<LocationsAndPrintersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsAndPrintersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsAndPrintersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
