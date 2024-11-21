import { Component, ResourceRef } from '@angular/core';
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
    this.applianceTypesResource = registrationService.applianceTypeResource;
  }

  applianceTypeClicked(applianceType: ApplianceType) {
    if (this.registrationService.regData.applianceType !== applianceType.text) {
      this.registrationService.regData.applianceType = applianceType.text;
      this.registrationService.regData.applianceTypeCode = applianceType.code;
      this.registrationService.appliances = [];
    }
    this.router.navigateByUrl('appliance');
  }

}

export interface ApplianceType {
  icon: string;
  text: string;
  code: string;
}