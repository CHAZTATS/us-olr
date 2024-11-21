import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCode2Component } from './registration-code-2.component';

describe('RegistrationCode2Component', () => {
  let component: RegistrationCode2Component;
  let fixture: ComponentFixture<RegistrationCode2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationCode2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCode2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
