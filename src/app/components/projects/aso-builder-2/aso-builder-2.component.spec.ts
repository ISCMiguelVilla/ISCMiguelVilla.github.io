import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoBuilder2Component } from './aso-builder-2.component';

describe('AsoBuilder2Component', () => {
  let component: AsoBuilder2Component;
  let fixture: ComponentFixture<AsoBuilder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsoBuilder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoBuilder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
