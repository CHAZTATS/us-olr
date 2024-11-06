import { Component } from '@angular/core';
import { PageComponent } from '../../core/components/page/page.component';
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-have-registration-code',
  standalone: true,
  imports: [PageComponent, TextButtonComponent],
  templateUrl: './have-registration-code.component.html',
  styleUrl: './have-registration-code.component.scss'
})
export class HaveRegistrationCodeComponent {

  title = 'Do you have your registration code?'

}
