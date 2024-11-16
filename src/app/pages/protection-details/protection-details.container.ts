import { Component } from '@angular/core';
import { ProtectionDetailsComponent } from "./protection-details.component";

@Component({
  selector: 'app-protection-details-container',
  standalone: true,
  imports: [ProtectionDetailsComponent],
  templateUrl: './protection-details.container.html',
})
export class ProtectionDetailsContainer {

}
