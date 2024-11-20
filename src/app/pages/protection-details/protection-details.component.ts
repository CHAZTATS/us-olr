import { Component, ViewEncapsulation } from '@angular/core';
import { PageComponent } from "../../core/components/page/page.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-protection-details',
  standalone: true,
  imports: [PageComponent, TextButtonComponent],
  templateUrl: './protection-details.component.html',
  styleUrl: './protection-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProtectionDetailsComponent {
  title = 'Protect your appliance — avoid unexpected repair bills'
}
