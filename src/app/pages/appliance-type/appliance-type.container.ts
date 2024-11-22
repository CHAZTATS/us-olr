import { Component, ResourceRef } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { ApplianceTypeComponent } from './appliance-type.component';

@Component({
  selector: 'app-appliance-type-container',
  imports: [ApplianceTypeComponent],
  templateUrl: './appliance-type.container.html'
})
export class ApplianceTypeContainer {

  applianceTypesResource: ResourceRef<ApplianceType[]>;

  constructor(private registrationService: RegistrationService, private router: Router) {
    this.applianceTypesResource = rxResource({
      loader: () => registrationService.getApplianceCategories()
    });
  }

  applianceTypeClicked(applianceType: ApplianceType) {
    if (this.registrationService.regData.applianceType !== applianceType.text) {
      this.registrationService.regData.applianceType = applianceType.text;
      this.registrationService.regData.applianceTypeCode = applianceType.code;
      this.registrationService.appliances = [];
    }
    this.registrationService.getAppliances().subscribe(x => {
      if (x.length == 1) {
        this.registrationService.regData.appliance = x[0].text;
        this.router.navigateByUrl('registration-code');
      } else {
        this.router.navigateByUrl('appliance');
      }
    })
  }

}

export interface ApplianceType {
  icon: string;
  text: string;
  code: string;
}