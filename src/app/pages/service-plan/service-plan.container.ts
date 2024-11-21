import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { ServicePlanComponent } from './service-plan.component';

@Component({
    selector: 'app-service-plan-container',
    imports: [ServicePlanComponent],
    templateUrl: './service-plan.container.html'
})
export class ServicePlanContainer {

  constructor(private registrationService: RegistrationService, private router: Router) {

  }

  continueClicked(didYouBuyAServicePlan: boolean) {
    this.registrationService.regData.didYouBuyAPlan = didYouBuyAServicePlan;
    this.router.navigateByUrl('planning-purchase');
  }

}
