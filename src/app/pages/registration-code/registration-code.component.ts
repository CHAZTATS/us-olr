import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageComponent } from '../../core/components/page/page.component';
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-registration-code',
  standalone: true,
  imports: [PageComponent, TextButtonComponent, PanelComponent, FormsModule],
  templateUrl: './registration-code.component.html',
  styleUrl: './registration-code.component.scss'
})
export class RegistrationCodeComponent {

  @Output() onSubmitClicked: EventEmitter<string> = new EventEmitter();

  title = 'Do you have your registration code?'
  subheader = "This is a 9-10 digit code that can be found on the registration card inside your appliance box. We'll use this to find your model and serial number.";
  registrationCode: string = '';


  submit() {
    this.onSubmitClicked.emit(this.registrationCode);
  }

}
