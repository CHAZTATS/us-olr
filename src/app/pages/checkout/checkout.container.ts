import { Component } from '@angular/core';
import { CheckoutComponent } from "./checkout.component";

@Component({
  selector: 'app-checkout-container',
  standalone: true,
  imports: [CheckoutComponent],
  templateUrl: './checkout.container.html',
})
export class CheckoutContainer {

}
