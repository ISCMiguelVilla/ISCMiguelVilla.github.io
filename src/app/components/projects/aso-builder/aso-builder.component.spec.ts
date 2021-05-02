import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoBuilderComponent } from './aso-builder.component';

describe('AsoBuilderComponent', () => {
  let component: AsoBuilderComponent;
  let fixture: ComponentFixture<AsoBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsoBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
