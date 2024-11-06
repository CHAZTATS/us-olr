import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/services/registration.service';
import { RegistrationCodeComponent } from './registration-code.component';

@Component({
  selector: 'app-registration-code-container',
  standalone: true,
  imports: [RegistrationCodeComponent],
  templateUrl: './registration-code.container.html',
})
export class RegistrationCodeContainer {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  submitClicked(registrationCode: string) {
    this.registrationService.regData.registrationCode = registrationCode;
    console.log(this.registrationService.regData);
    this.router.navigateByUrl('cost');
  }

}
