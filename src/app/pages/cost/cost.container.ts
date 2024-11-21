import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { CostComponent } from './cost.component';

@Component({
    selector: 'app-cost-container',
    imports: [CostComponent],
    templateUrl: './cost.container.html'
})
export class CostContainer {

  cost: number;

  constructor(private registrationService: RegistrationService, private router: Router) {

  }

  ngOnInit() {
    this.cost = this.registrationService.regData.price;
  }

  continueClicked(cost: number) {
    this.registrationService.regData.price = cost;
    this.router.navigateByUrl('arrival-date');
  }

}
