import { Component, ViewEncapsulation } from '@angular/core';
import { PageComponent } from "../../core/components/page/page.component";

@Component({
  selector: 'app-order-confirmation',
  imports: [PageComponent],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class OrderConfirmationComponent {

  title = `That's it you're all set!`;

}
