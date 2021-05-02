import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsUtilitiesComponent } from './devs-utilities.component';

describe('DevsUtilitiesComponent', () => {
  let component: DevsUtilitiesComponent;
  let fixture: ComponentFixture<DevsUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsUtilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevsUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
