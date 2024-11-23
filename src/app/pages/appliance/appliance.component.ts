import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { PageComponent } from "../../core/components/page/page.component";
import { Appliance } from '../../core/models/appliance';
import { RegistrationService } from '../../core/services/registration.service';
import { TextButtonComponent } from '../../shared/components/text-button/text-button.component';

@Component({
  selector: 'app-appliance',
  imports: [PageComponent, TextButtonComponent],
  templateUrl: './appliance.component.html',
  styleUrl: './appliance.component.scss'
})
export class ApplianceComponent {

  registrationService = inject(RegistrationService);
  router = inject(Router);

  appliancesResource = rxResource({
    loader: () => this.registrationService.getAppliances()
  });

  title: string = 'Can you tell us what the appliance is?';
  subheader: string = 'Pick the one that seems most correct.'

  applianceClicked(appliance: Appliance) {
    this.registrationService.regData.appliance = appliance.text;
    this.router.navigateByUrl('registration-code');
  }

}
