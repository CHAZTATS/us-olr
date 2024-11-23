import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PageComponent } from "../../core/components/page/page.component";
import { RegistrationService } from '../../core/services/registration.service';
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-service-plan',
  imports: [PageComponent, FormsModule, TextButtonComponent],
  templateUrl: './service-plan.component.html',
  styleUrl: './service-plan.component.scss'
})
export class ServicePlanComponent {

  title = 'Did you buy a service plan when you bought your appliance?';
  didYouBuyAServicePlan: boolean;

  registrationService = inject(RegistrationService);
  router = inject(Router);

  continueClicked() {
    this.registrationService.regData.didYouBuyAPlan = this.didYouBuyAServicePlan;
    this.router.navigateByUrl('planning-purchase');
  }

}
