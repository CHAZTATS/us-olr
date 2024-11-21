import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-text-button',
    imports: [CommonModule],
    templateUrl: './text-button.component.html',
    styleUrl: './text-button.component.scss'
})
export class TextButtonComponent {

  @Input() color: 'primary' | 'mono' | 'white' = 'mono';
  @Input() text: string;
  @Input() width: number;
  @Input() fillWidth: boolean = false;
  @Input() height: number;
  @Input() padding: string;
  @Input() fontSize: number;
  @Input() disabled: boolean;

}
