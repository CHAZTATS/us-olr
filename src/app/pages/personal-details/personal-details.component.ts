import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from '../../core/components/page/page.component';
import { Address, AddressyAddress } from '../../core/services/registration.service';
import { PanelComponent } from "../../shared/components/panel/panel.component";
import { TextButtonComponent } from "../../shared/components/text-button/text-button.component";

@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [PageComponent, JsonPipe, FormsModule, TextButtonComponent, CommonModule, PanelComponent, ReactiveFormsModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PersonalDetailsComponent implements OnInit, OnChanges {

  @Input() data: any;
  @Input() addresses: AddressyAddress[];
  @Input() selectedAddress: Address;
  @Output() onAddressSearchChanged: EventEmitter<string> = new EventEmitter();
  @Output() onAddressSelected: EventEmitter<string> = new EventEmitter();


  title = 'Enter your details';
  subheader = '* Required field';

  manualAddress = false;

  addressSearch = new FormControl('');
  isAddressSelected = false;


  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  addressLine1: string = '';
  addressLine2: string = '';
  towncity: string = '';
  state: string = '';
  zipcode: string = '';

  continueClicked() {

  }

  addressSelected(addressId: string) {
    this.isAddressSelected = true;
    this.manualAddress = true;
    this.onAddressSelected.emit(addressId);
  }

  ngOnInit() {
    this.addressSearch.valueChanges.subscribe(x => {
      if (x && x?.length > 2) {
        this.onAddressSearchChanged.emit(x);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedAddress'] && this.selectedAddress) {
      this.addressLine1 = this.selectedAddress.addressLine1;
      this.addressLine2 = this.selectedAddress.addressLine2;
      this.towncity = this.selectedAddress.towncity;
      this.state = this.selectedAddress.state;
      this.zipcode = this.selectedAddress.zipcode;
    }
  }

  findAddressClicked() {
    this.isAddressSelected = false;
    this.manualAddress = false;
  }

}
