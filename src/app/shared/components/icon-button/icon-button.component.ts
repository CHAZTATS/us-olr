import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-icon-button',
    imports: [FontAwesomeModule],
    templateUrl: './icon-button.component.html',
    styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {

  @Input() icon: string;
  @Input() text: string;

}
