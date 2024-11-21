import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageComponent } from "../../core/components/page/page.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
    selector: 'app-cost',
    imports: [PageComponent, FormsModule, TextButtonComponent],
    templateUrl: './cost.component.html',
    styleUrl: './cost.component.scss'
})
export class CostComponent {

  title = 'How much did your appliance cost?';

  @Input() cost: number;
  @Output() onContinueClicked: EventEmitter<number> = new EventEmitter();

  continueClicked() {
    this.onContinueClicked.emit(this.cost);
  }

}
