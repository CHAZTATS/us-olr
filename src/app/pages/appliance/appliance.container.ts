import { Component, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { ApplianceComponent } from './appliance.component';

@Component({
  selector: 'app-appliance-container',
  imports: [ApplianceComponent],
  templateUrl: './appliance.container.html'
})
export class ApplianceContainer {

  appliancesResource: ResourceRef<Appliance[]>;

  constructor(private registrationService: RegistrationService, private router: Router) {
    this.appliancesResource = rxResource({
      loader: () => registrationService.getAppliances()
    });
  }

  applianceClicked(appliance: Appliance) {
    this.registrationService.regData.appliance = appliance.text;
    this.router.navigateByUrl('registration-code');
  }
}

export interface Appliance {
  text: string;
}