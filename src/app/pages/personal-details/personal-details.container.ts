import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Address, AddressyAddress, RegistrationService } from '../../core/services/registration.service';
import { PersonalDetailsComponent } from './personal-details.component';

@Component({
  selector: 'app-personal-details-container',
  imports: [PersonalDetailsComponent, AsyncPipe],
  templateUrl: './personal-details.container.html'
})
export class PersonalDetailsContainer {

  data: any;
  addresses$: Observable<AddressyAddress[]>;
  selectedAddress$: Observable<Address>;

  constructor(private registrationService: RegistrationService) {
    this.data = registrationService.regData;
  }

  addressSearchChanged(search: string) {
    this.addresses$ = this.registrationService.searchAddress(search).pipe(
      map(x => {
        return x.Items;
      })
    )
  }

  addressSelected(addressId: string) {
    this.selectedAddress$ = this.registrationService.getAddressById(addressId).pipe(
      map(x => {
        console.log(x);
        let address = {} as Address;
        address.line1 = x.Line1;
        address.line2 = x.Line2;
        address.state = x.Province;
        address.city = x.City;
        address.postalCode = x.PostalCode;
        return address;
      })
    );
  }

  continueClicked(personalDetailsFormGroup: FormGroup) {
    this.registrationService.regData.customer = personalDetailsFormGroup.getRawValue();
    this.registrationService.getQuote().subscribe(x => {
      let quoteId = x[0].Id;
      this.registrationService.getCheckoutAuth().subscribe(x => {
        this.registrationService.checkoutAccessToken = x.access_token;
        this.registrationService.getCheckoutUrl(quoteId).subscribe(x => {
          window.location.href = `${x.paymentRedirectUrl}&redirect=localhost:4200/order-confirmation`;
        })
      })
    });
  }

}