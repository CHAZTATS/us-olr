import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningPurchaseComponent } from './planning-purchase.component';

describe('PlanningPurchaseComponent', () => {
  let component: PlanningPurchaseComponent;
  let fixture: ComponentFixture<PlanningPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
