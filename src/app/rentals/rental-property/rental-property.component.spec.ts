import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPropertyComponent } from './rental-property.component';

describe('RentalPropertyComponent', () => {
  let component: RentalPropertyComponent;
  let fixture: ComponentFixture<RentalPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
