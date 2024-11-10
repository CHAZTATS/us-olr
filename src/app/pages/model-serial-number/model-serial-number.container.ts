import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModelSerialNumberComponent } from './model-serial-number.component';

@Component({
  selector: 'app-model-serial-number-container',
  standalone: true,
  imports: [ModelSerialNumberComponent],
  templateUrl: './model-serial-number.container.html',
})
export class ModelSerialNumberContainer {

  constructor(private router: Router) { }

  iHaveARegistrationCodeClicked() {
    this.router.navigateByUrl('registration-code');
  }

}
