import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address, AddressyAddress, RegistrationService } from '../../core/services/registration.service';
import { PersonalDetailsComponent } from './personal-details.component';

@Component({
  selector: 'app-personal-details-container',
  standalone: true,
  imports: [PersonalDetailsComponent, AsyncPipe],
  templateUrl: './personal-details.container.html',
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
        address.addressLine1 = x.Line1;
        address.addressLine2 = x.Line2;
        address.state = x.Province;
        address.towncity = x.City;
        address.zipcode = x.PostalCode;
        return address;
      })
    );
  }

}