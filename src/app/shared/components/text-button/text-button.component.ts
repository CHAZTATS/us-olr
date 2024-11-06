import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  standalone: true,
  imports: [],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.scss'
})
export class TextButtonComponent {

  @Input() color: 'primary' | 'mono' = 'mono';
  @Input() text: string;
  @Input() width: number;
  @Input() height: number;
  @Input() padding: string;
  @Input() fontSize: number;
  @Input() disabled: boolean;

}
