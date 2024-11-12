import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from '../../core/services/registration.service';
import { ApplianceTypeComponent } from './appliance-type.component';

@Component({
  selector: 'app-appliance-type-container',
  standalone: true,
  imports: [ApplianceTypeComponent, AsyncPipe],
  templateUrl: './appliance-type.container.html',
})
export class ApplianceTypeContainer {

  applianceTypes$: Observable<ApplianceType[]>;

  constructor(private registrationService: RegistrationService, private router: Router) {
    this.applianceTypes$ = registrationService.getApplianceCategories();
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