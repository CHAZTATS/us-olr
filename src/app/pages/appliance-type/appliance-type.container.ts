import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  msTest$: Observable<any>;

  constructor(private registrationService: RegistrationService, private router: Router, private route: ActivatedRoute) {
    // this.applianceTypes$ = of(this.testApplianceTypes)
    this.applianceTypes$ = registrationService.getApplianceCategories();
    this.msTest$ = registrationService.getModelAndSerialNumberFromRegistrationCode();
  }

  applianceTypeClicked(applianceType: ApplianceType) {
    this.registrationService.regData.applianceType = applianceType.text;
    this.registrationService.regData.applianceTypeCode = applianceType.code;
    this.router.navigateByUrl('appliance');
  }

}

export interface ApplianceType {
  icon: string;
  text: string;
  code: string;
}