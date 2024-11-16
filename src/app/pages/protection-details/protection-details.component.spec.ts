import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionDetailsComponent } from './protection-details.component';

describe('ProtectionDetailsComponent', () => {
  let component: ProtectionDetailsComponent;
  let fixture: ComponentFixture<ProtectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
