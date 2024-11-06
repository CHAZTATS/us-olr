import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { CostComponent } from './cost.component';

@Component({
  selector: 'app-cost-container',
  standalone: true,
  imports: [CostComponent],
  templateUrl: './cost.container.html',
})
export class CostContainer {

  constructor(private registrationService: RegistrationService, private router: Router) {

  }

  continueClicked(cost: number) {
    this.registrationService.regData.price = cost;
    this.router.navigateByUrl('arrival-date');
  }

}
