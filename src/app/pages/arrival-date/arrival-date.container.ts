import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { ArrivalDateComponent } from './arrival-date.component';

@Component({
    selector: 'app-arrival-date-container',
    imports: [ArrivalDateComponent],
    templateUrl: './arrival-date.container.html'
})
export class ArrivalDateContainer {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  continueClicked(date: string) {
    this.registrationService.regData.date = date;
    this.router.navigateByUrl('service-plan');
    console.log(this.registrationService.regData);
  }

}
