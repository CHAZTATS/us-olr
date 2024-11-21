import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCodeWithParamsComponent } from './registration-code-with-params.component';

describe('RegistrationCodeWithParamsComponent', () => {
  let component: RegistrationCodeWithParamsComponent;
  let fixture: ComponentFixture<RegistrationCodeWithParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationCodeWithParamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCodeWithParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
