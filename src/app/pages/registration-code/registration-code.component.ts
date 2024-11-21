import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageComponent } from '../../core/components/page/page.component';
import { ModelSerialResponse } from '../../core/services/registration.service';
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
    selector: 'app-registration-code',
    imports: [PageComponent, TextButtonComponent, PanelComponent, FormsModule, FontAwesomeModule],
    templateUrl: './registration-code.component.html',
    styleUrl: './registration-code.component.scss'
})
export class RegistrationCodeComponent {

  @Input() submitClicked: boolean = false;
  @Input() isValidRegCode: boolean = false;
  @Input() modelSerialNumberResponse: ModelSerialResponse;

  @Output() onSubmitClicked: EventEmitter<string> = new EventEmitter();
  @Output() onContinueClicked: EventEmitter<null> = new EventEmitter();
  @Output() onIDontHaveARegistrationCodeClicked: EventEmitter<null> = new EventEmitter();

  title = 'Do you have your registration code?'
  subheader = "This is a 9-10 digit code that can be found on the registration card inside your appliance box. We'll use this to find your model and serial number.";
  registrationCode: string = '';

  submit() {
    this.onSubmitClicked.emit(this.registrationCode);
  }

  continueClicked() {
    this.onContinueClicked.emit();
  }

  iDontHaveARegistraionCodeClicked() {
    this.onIDontHaveARegistrationCodeClicked.emit();
  }

}
