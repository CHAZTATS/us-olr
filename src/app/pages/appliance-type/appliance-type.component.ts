import { Component, inject, ResourceStatus } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { PageComponent } from '../../core/components/page/page.component';
import { ApplianceType } from '../../core/models/appliance-type';
import { RegistrationService } from '../../core/services/registration.service';
import { IconButtonComponent } from "../../shared/components/icon-button/icon-button.component";

@Component({
  selector: 'app-appliance-type',
  imports: [PageComponent, IconButtonComponent],
  templateUrl: './appliance-type.component.html',
  styleUrl: './appliance-type.component.scss'
})
export class ApplianceTypeComponent {

  registrationService = inject(RegistrationService);
  router = inject(Router);

  applianceTypesResource = rxResource({
    loader: () => this.registrationService.getApplianceCategories()
  });

  title: string = 'What type of appliance are you registering?';

  status = ResourceStatus;

  applianceTypeClicked(applianceType: ApplianceType) {
    if (this.registrationService.regData.applianceType !== applianceType.text) {
      this.registrationService.regData.applianceType = applianceType.text;
      this.registrationService.regData.applianceTypeCode = applianceType.code;
      this.registrationService.appliances = [];
    }
    // this.registrationService.getAppliances().subscribe(x => {
    //   if (x.length == 1) {
    //     this.registrationService.regData.appliance = x[0].text;
    //     this.router.navigateByUrl('registration-code');
    //   } else {
    this.router.navigateByUrl('appliance');
    //   }
    // })
  }

}
