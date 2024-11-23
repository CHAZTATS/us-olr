import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PageComponent } from "../../core/components/page/page.component";
import { RegistrationService } from '../../core/services/registration.service';
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-cost',
  imports: [PageComponent, FormsModule, TextButtonComponent],
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.scss'
})
export class CostComponent {

  title = 'How much did your appliance cost?';

  cost: number;

  registrationService = inject(RegistrationService);
  router = inject(Router);

  continueClicked() {
    this.registrationService.regData.price = this.cost.toString();
    this.router.navigateByUrl('arrival-date');
  }
}
