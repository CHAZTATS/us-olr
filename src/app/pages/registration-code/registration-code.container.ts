import { Component, computed, inject, ResourceRef, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ModelSerialResponse, RegistrationService } from '../../core/services/registration.service';
import { RegistrationCodeComponent } from './registration-code.component';

@Component({
  selector: 'app-registration-code-container',
  imports: [RegistrationCodeComponent],
  templateUrl: './registration-code.container.html'
})
export class RegistrationCodeContainer {

  hasSubmitBeenClicked = false;
  isValidRegCode = false;

  modelSerialNumberResource: ResourceRef<ModelSerialResponse[]>;
  modelSerialResponse = computed(() => this.modelSerialNumberResource?.value()?.[0] ?? {} as ModelSerialResponse);

  registrationCodeSubmitted = signal<string>('');


  constructor(private registrationService: RegistrationService, private router: Router) {
    let route = inject(ActivatedRoute);
    route.queryParamMap.subscribe(x => {
      let model = x.get('model');
      let serial = x.get('serial');
      let client = x.get('client');

      if (model && serial && client) {
        this.modelSerialNumberResource = rxResource({
          request: () => ({ modelNumber: model, serialNumber: serial }),
          loader: (parameters) => registrationService.validateModelAndSerialNumber(parameters.request.modelNumber, parameters.request.serialNumber)
        })
      } else {
        this.modelSerialNumberResource = rxResource({
          request: this.registrationCodeSubmitted,
          loader: ({ request }) => {
            if (request) {
              return registrationService.getModelAndSerialNumberFromRegistrationCode(request)
            } else {
              return of([]);
            }
          }
        })
      }
    })


  }

  submitClicked(registrationCode: string) {
    this.hasSubmitBeenClicked = true;
    this.registrationCodeSubmitted.set(registrationCode);
    // this.registrationService.getModelAndSerialNumberFromRegistrationCode(registrationCode).subscribe(
    //   x => {
    //     if (x.length > 0) {
    //       this.isValidRegCode = true;
    //       // this.modelSerialResponse.set(x[0]);
    //       this.registrationService.regData.modelNumber = this.modelSerialResponse().Model_Number;
    //       this.registrationService.regData.serialNumber = this.modelSerialResponse().Serial_Number;
    //     } else {
    //       this.hasSubmitBeenClicked = false;
    //     }
    //   }
    // );
    // this.router.navigateByUrl('cost');
  }

  continueClicked() {
    this.router.navigateByUrl('cost');
  }

  iDontHaveARegistrationCodeClicked() {
    this.router.navigateByUrl('model-serial-number')
  }

}
