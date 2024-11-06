import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageComponent } from "../../core/components/page/page.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-service-plan',
  standalone: true,
  imports: [PageComponent, FormsModule, TextButtonComponent],
  templateUrl: './service-plan.component.html',
  styleUrl: './service-plan.component.scss'
})
export class ServicePlanComponent {

  @Output() onContinueClicked: EventEmitter<boolean> = new EventEmitter();

  title = 'Did you buy a service plan when you bought your appliance?';
  didYouBuyAServicePlan: boolean;

  continueClicked() {
    this.onContinueClicked.emit(this.didYouBuyAServicePlan);
  }

}
