import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageComponent } from "../../core/components/page/page.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
    selector: 'app-arrival-date',
    imports: [PageComponent, TextButtonComponent, FormsModule],
    templateUrl: './arrival-date.component.html',
    styleUrl: './arrival-date.component.scss'
})
export class ArrivalDateComponent {

  @Output() onContinueClicked: EventEmitter<string> = new EventEmitter();

  title = 'When did the product arrive at your home?';
  subheader = 'Either from an online purchase or an in-store visit';
  date: string;

  continueClicked() {
    this.onContinueClicked.emit(this.date);
  }

}
