import { Component, computed, inject, ResourceStatus } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PageComponent } from "../../core/components/page/page.component";
import { ModelSerialResponse, RegistrationService } from '../../core/services/registration.service';
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-registration-code',
  imports: [PageComponent, PanelComponent, TextButtonComponent, FormsModule],
  templateUrl: './registration-code.component.html',
  styleUrl: './registration-code.component.scss'
})
export class RegistrationCodeComponent {

  title = 'Do you have your registration code?'
  subheader = "This is a 9-10 digit code that can be found on the registration card inside your appliance box. We'll use this to find your model and serial number.";

  registrationCode = '';

  modelSerialNumberResource = rxResource({
    loader: (param) => {
      if (param.previous.status === ResourceStatus.Idle) {
        // skip initial loading!
        return of()
      }

      return this.registrationService.getModelAndSerialNumberFromRegistrationCode(this.registrationCode)
    }
  });

  modelSerialNumberData = computed(() => this.modelSerialNumberResource.value()?.[0] ?? {} as ModelSerialResponse);

  registrationService = inject(RegistrationService);
  route = inject(ActivatedRoute);
  router = inject(Router);


  submitClicked() {
    this.modelSerialNumberResource.reload();
  }

  iDontHaveARegistrationCodeClicked() {
    this.router.navigateByUrl('model-serial-number');
  }

  continueClicked() {
    this.router.navigateByUrl('cost');
  }

}
