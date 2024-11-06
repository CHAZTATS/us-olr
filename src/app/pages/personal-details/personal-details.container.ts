import { Component } from '@angular/core';
import { RegistrationService } from '../../core/services/registration.service';
import { PersonalDetailsComponent } from './personal-details.component';

@Component({
  selector: 'app-personal-details-container',
  standalone: true,
  imports: [PersonalDetailsComponent],
  templateUrl: './personal-details.container.html',
})
export class PersonalDetailsContainer {

  data: any;

  constructor(private registrationService: RegistrationService) {
    this.data = registrationService.regData;
  }

}
