import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageComponent } from '../../core/components/page/page.component';
import { IconButtonComponent } from "../../shared/components/icon-button/icon-button.component";
import { ApplianceType } from './appliance-type.container';

@Component({
  selector: 'app-appliance-type',
  standalone: true,
  imports: [PageComponent, IconButtonComponent, JsonPipe],
  templateUrl: './appliance-type.component.html',
  styleUrl: './appliance-type.component.scss'
})
export class ApplianceTypeComponent {

  @Input() applianceTypes: ApplianceType[];
  @Output() onApplianceTypeClicked: EventEmitter<ApplianceType> = new EventEmitter();

  title: string = 'What type of appliance are you registering?';

  applianceTypeClicked(applianceType: ApplianceType) {
    this.onApplianceTypeClicked.emit(applianceType);
  }

}
