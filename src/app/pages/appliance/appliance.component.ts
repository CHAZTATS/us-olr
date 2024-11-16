import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageComponent } from "../../core/components/page/page.component";
import { TextButtonComponent } from '../../shared/components/text-button/text-button.component';
import { Appliance } from './appliance.container';

@Component({
  selector: 'app-appliance',
  standalone: true,
  imports: [PageComponent, TextButtonComponent],
  templateUrl: './appliance.component.html',
  styleUrl: './appliance.component.scss'
})
export class ApplianceComponent {

  @Input() appliances: Appliance[];
  @Output() onApplianceClicked: EventEmitter<Appliance> = new EventEmitter();

  title: string = 'Can you tell us what the appliance is?';
  subheader: string = 'Pick the one that seems most correct.'

  applianceClicked(appliance: Appliance) {
    this.onApplianceClicked.emit(appliance);
  }

}
