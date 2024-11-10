import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PageComponent } from '../../core/components/page/page.component';

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [PageComponent, JsonPipe],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {

  @Input() data: any;

  title = 'Enter your details'

}
