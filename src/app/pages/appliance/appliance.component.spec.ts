import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceComponent } from './appliance.component';

describe('ApplianceComponent', () => {
  let component: ApplianceComponent;
  let fixture: ComponentFixture<ApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplianceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
