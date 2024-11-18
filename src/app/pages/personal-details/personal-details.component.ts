import { CommonModule, JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  @Output() onContinueClicked: EventEmitter<FormGroup> = new EventEmitter();


  title = 'Enter your details';
  subheader = '* Required field';

  manualAddress = false;

  addressSearch = new FormControl('');
  isAddressSelected = false;

  personalDetailsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    billingAddress: new FormGroup({
      line1: new FormControl(''),
      line2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(''),
    })
  });

  continueClicked() {
    console.log(this.personalDetailsForm.getRawValue());
    this.onContinueClicked.emit(this.personalDetailsForm);
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
      this.personalDetailsForm.get('billingAddress')?.patchValue(this.selectedAddress);
    }
  }

  findAddressClicked() {
    this.isAddressSelected = false;
    this.manualAddress = false;
  }

}
