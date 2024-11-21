import { Component, inject, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
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

  validateModelAndSerialNumberResource: ResourceRef<ModelSerialResponse[]>

  constructor(private registrationService: RegistrationService, private router: Router) {
    let route = inject(ActivatedRoute);
    route.queryParamMap.subscribe(x => {
      let model = x.get('model');
      let serial = x.get('serial');
      let client = x.get('client');

      if (model && serial && client) {
        this.validateModelAndSerialNumberResource = rxResource({
          request: () => ({ modelNumber: model, serialNumber: serial }),
          loader: (parameters) => registrationService.validateModelAndSerialNumber(parameters.request.modelNumber, parameters.request.serialNumber)
        })
      }
    })
  }

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
