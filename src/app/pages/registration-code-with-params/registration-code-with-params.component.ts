import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { PageComponent } from "../../core/components/page/page.component";
import { ModelSerialResponse, RegistrationService } from '../../core/services/registration.service';
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-registration-code-with-params',
  imports: [PageComponent, TextButtonComponent, PanelComponent],
  templateUrl: './registration-code-with-params.component.html',
  styleUrl: './registration-code-with-params.component.scss'
})
export class RegistrationCodeWithParamsComponent {

  title = 'Do you have your registration code?'
  subheader = "This is a 9-10 digit code that can be found on the registration card inside your appliance box. We'll use this to find your model and serial number.";

  registrationService = inject(RegistrationService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  modelSerialNumberResource = rxResource({
    loader: () => {
      let model = this.route.snapshot.queryParamMap.get('model')!;
      let serial = this.route.snapshot.queryParamMap.get('serial')!;
      return this.registrationService.validateModelAndSerialNumber(model, serial)
    }
  })

  modelSerialNumberData = computed(() => this.modelSerialNumberResource.value()?.[0] ?? {} as ModelSerialResponse);

  continueClicked() {
    this.router.navigateByUrl('cost');
  }
}
