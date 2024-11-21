import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModelSerialResponse, RegistrationService } from '../../core/services/registration.service';
import { RegistrationCodeComponent } from './registration-code.component';

@Component({
    selector: 'app-registration-code-container',
    imports: [RegistrationCodeComponent],
    templateUrl: './registration-code.container.html'
})
export class RegistrationCodeContainer {

  hasSubtmitBeenClicked = false;
  isValidRegCode = false;
  modelSerialResponse: ModelSerialResponse;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  submitClicked(registrationCode: string) {
    this.hasSubtmitBeenClicked = true;
    this.registrationService.getModelAndSerialNumberFromRegistrationCode(registrationCode).subscribe(
      x => {
        if (x.length > 0) {
          this.isValidRegCode = true;
          this.modelSerialResponse = x[0];
        } else {
          this.hasSubtmitBeenClicked = false;
        }
      }
    );
    // this.router.navigateByUrl('cost');
  }

  continueClicked() {
    this.router.navigateByUrl('cost');
  }

  iDontHaveARegistrationCodeClicked() {
    this.router.navigateByUrl('model-serial-number')
  }

}
