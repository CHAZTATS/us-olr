import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageComponent } from '../../core/components/page/page.component';
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [PageComponent, JsonPipe, FormsModule, TextButtonComponent],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {

  @Input() data: any;

  title = 'Enter your details';
  subheader = '* Required field';

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  continueClicked() {

  }

}
