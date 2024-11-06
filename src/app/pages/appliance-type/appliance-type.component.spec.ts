import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceTypeComponent } from './appliance-type.component';

describe('ApplianceTypeComponent', () => {
  let component: ApplianceTypeComponent;
  let fixture: ComponentFixture<ApplianceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplianceTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplianceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
