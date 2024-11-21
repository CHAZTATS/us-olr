import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PageComponent } from "../../core/components/page/page.component";
import { RegistrationService } from '../../core/services/registration.service';
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-registration-code-2',
  imports: [PageComponent, PanelComponent, TextButtonComponent, FormsModule],
  templateUrl: './registration-code-2.component.html',
  styleUrl: './registration-code-2.component.scss'
})
export class RegistrationCode2Component {

  title = 'Do you have your registration code?'
  subheader = "This is a 9-10 digit code that can be found on the registration card inside your appliance box. We'll use this to find your model and serial number.";

  registrationCode = signal('');

  modelSerialNumberResource = rxResource({
    request: this.registrationCode,
    loader: () => {
      if (this.registrationCode()) {
        return of(null);
      } else {
        return this.registrationService.getModelAndSerialNumberFromRegistrationCode(this.registrationCode())
      }
    }
  });

  registrationService = inject(RegistrationService);
  route = inject(ActivatedRoute);
  router = inject(Router);


  submitClicked() {
    this.registrationCode.set('782A31DTJ');
  }

  iDontHaveARegistrationCodeClicked() {
    this.router.navigateByUrl('model-serial-number')
  }

  continueClicked() {
    this.router.navigateByUrl('cost');
  }

}
