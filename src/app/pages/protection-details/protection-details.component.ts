import { Component, ViewEncapsulation } from '@angular/core';
import { PageComponent } from "../../core/components/page/page.component";

@Component({
  selector: 'app-protection-details',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './protection-details.component.html',
  styleUrl: './protection-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProtectionDetailsComponent {
  title = 'Protect your appliance — avoid unexpected repair bills'
}
