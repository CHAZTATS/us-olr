import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  regData: RegistrationData;

  constructor() {
    this.regData = new RegistrationData();
  }
}

export class RegistrationData {
  applianceType: string;
  appliance: string;
  registrationCode: string;
  modelNumber: string;
  serialNumber: string;
  price: number;
  date: string;
  didYouBuyAPlan: boolean;
  plannedPurchases: string[];

  constructor() {

  }
}
