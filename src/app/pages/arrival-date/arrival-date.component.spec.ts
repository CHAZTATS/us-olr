import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalDateComponent } from './arrival-date.component';

describe('ArrivalDateComponent', () => {
  let component: ArrivalDateComponent;
  let fixture: ComponentFixture<ArrivalDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrivalDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
