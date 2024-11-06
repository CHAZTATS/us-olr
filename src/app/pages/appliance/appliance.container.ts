import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RegistrationService } from '../../core/services/registration.service';
import { ApplianceComponent } from './appliance.component';

@Component({
  selector: 'app-appliance-container',
  standalone: true,
  imports: [ApplianceComponent, AsyncPipe],
  templateUrl: './appliance.container.html',
})
export class ApplianceContainer {

  testAppliances: Appliance[] = [
    {
      text: 'Fridge'
    },
    {
      text: 'Freezer'
    },
    {
      text: 'Oven'
    },
    {
      text: 'Fridge'
    },
    {
      text: 'Freezer'
    },
    {
      text: 'Oven'
    },
    {
      text: 'Fridge'
    },
    {
      text: 'Freezer'
    },
    {
      text: 'Oven'
    },
  ]

  appliances$: Observable<Appliance[]>;

  constructor(private registrationService: RegistrationService, private router: Router) {
    this.appliances$ = of(this.testAppliances);
  }

  applianceClicked(appliance: Appliance) {
    this.registrationService.regData.appliance = appliance.text;
    this.router.navigateByUrl('registration-code');
  }
}

export interface Appliance {
  text: string;
}