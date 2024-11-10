import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageComponent } from "../../core/components/page/page.component";
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-model-serial-number',
  standalone: true,
  imports: [TextButtonComponent, PanelComponent, PageComponent, FormsModule],
  templateUrl: './model-serial-number.component.html',
  styleUrl: './model-serial-number.component.scss'
})
export class ModelSerialNumberComponent {

  @Output() onIHaveARegistrationCodeClicked: EventEmitter<null> = new EventEmitter();

  title = 'Please provide your model and serial number';
  subheader = 'We need this to help provide you with a better warranty service if you ever need a repair.';

  modelNumber: string = '';
  serialNumber: string = '';

  continueClicked() {
    console.log(this.modelNumber);
    console.log(this.serialNumber);
  }

  iHaveARegistraionCodeClicked() {
    this.onIHaveARegistrationCodeClicked.emit();
  }
}
