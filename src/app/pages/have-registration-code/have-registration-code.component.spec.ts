import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveRegistrationCodeComponent } from './have-registration-code.component';

describe('HaveRegistrationCodeComponent', () => {
  let component: HaveRegistrationCodeComponent;
  let fixture: ComponentFixture<HaveRegistrationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaveRegistrationCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaveRegistrationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
