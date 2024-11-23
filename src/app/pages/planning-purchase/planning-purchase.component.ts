import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PageComponent } from "../../core/components/page/page.component";
import { RegistrationService } from '../../core/services/registration.service';
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-planning-purchase',
  imports: [PageComponent, TextButtonComponent],
  templateUrl: './planning-purchase.component.html',
  styleUrl: './planning-purchase.component.scss'
})
export class PlanningPurchaseComponent {


  @Output() onContinueClicked: EventEmitter<string[]> = new EventEmitter();

  appliances = [
    'Range Hood',
    'Wall Oven',
    'Range',
    'Washer',
    'Fridge',
    'Dishwasher',
    'Microwave',
    'Dryer'
  ];

  selectedAppliances: string[] = [];

  title = 'Are you planning to purchase any of these appliances in the next 12 months?';

  registrationService = inject(RegistrationService);
  router = inject(Router);

  onChange(event: Event, appliance: string) {
    const target = event.target as HTMLInputElement
    if (target.checked) {
      this.selectedAppliances.push(appliance);
    } else {
      this.selectedAppliances = this.selectedAppliances.filter(x => x != appliance);
    }
  }

  continueClicked() {
    this.registrationService.regData.plannedPurchases = this.selectedAppliances;
    this.router.navigateByUrl('personal-details');
  }
}
