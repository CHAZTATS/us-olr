import { Component, EventEmitter, Output } from '@angular/core';
import { PageComponent } from "../../core/components/page/page.component";
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

  onChange(event: Event, appliance: string) {
    const target = event.target as HTMLInputElement
    if (target.checked) {
      this.selectedAppliances.push(appliance);
    } else {
      this.selectedAppliances = this.selectedAppliances.filter(x => x != appliance);
    }
  }

  continueClicked() {
    this.onContinueClicked.emit(this.selectedAppliances);
  }
}
