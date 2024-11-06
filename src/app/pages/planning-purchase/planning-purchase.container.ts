import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { PlanningPurchaseComponent } from './planning-purchase.component';

@Component({
  selector: 'app-planning-purchase-container',
  standalone: true,
  imports: [PlanningPurchaseComponent],
  templateUrl: './planning-purchase.container.html',
})
export class PlanningPurchaseContainer {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  continueClicked(selectedAppliances: string[]) {
    this.registrationService.regData.plannedPurchases = selectedAppliances;
    this.router.navigateByUrl('personal-details');
  }

}
