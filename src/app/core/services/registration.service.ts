import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { brand } from '../../../../config/brand/brand';
import { ApplianceType } from '../../pages/appliance-type/appliance-type.container';
import { Appliance } from '../../pages/appliance/appliance.container';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  CATALOGUE_API = 'https://api.catalogue.common.use1.test.test.domgenusa-test.cloud/v1';
  MODEL_SERIAL_API = 'https://api.aws.preprod.domgen-usa.com/v1';
  BRAND = brand.name;
  regData: RegistrationData;

  applianceTypes: ApplianceType[] = [];
  appliances: Appliance[] = [];

  constructor(private http: HttpClient) {
    this.regData = new RegistrationData();
  }

  getApplianceCategories(): Observable<ApplianceType[]> {
    if (this.applianceTypes.length < 1) {
      return this.http.get<CatalogueAPIResponse>(`${this.CATALOGUE_API}/brands/${this.BRAND}/categories`).pipe(
        map(x => {
          x.result.forEach(y => {
            let applianceType = {} as ApplianceType;
            applianceType.icon = y.icon;
            applianceType.icon = 'mug-saucer';
            applianceType.text = y.categoryName;
            applianceType.code = y.categoryCode;
            this.applianceTypes.push(applianceType);
          })
          return this.applianceTypes;
        })
      );
    } else {
      return of(this.applianceTypes);
    }

  }

  getAppliances(): Observable<Appliance[]> {
    if (this.appliances.length < 1) {
      return this.http.get<CatalogueAPIResponse>(`${this.CATALOGUE_API}/brands/${this.BRAND}/products?categoryCode=${this.regData.applianceTypeCode}`).pipe(
        map(x => {
          x.result.forEach(y => {
            let appliance = {} as Appliance;
            appliance.text = y.applianceName;
            this.appliances.push(appliance);
          })
          return this.appliances;
        })
      );
    } else {
      return of(this.appliances);
    }

  }

  validateModelAndSerialNumber(modelNumber?: string, serialNumber?: string) {
    return this.http.get<ModelSerialResponse[]>(`${this.MODEL_SERIAL_API}/model-serialization-v2?model=${modelNumber}&serial=${serialNumber}&client=${brand.modelSerialAPIBrandCode}`);
  }

  getModelAndSerialNumberFromRegistrationCode(registrationCode?: string) {
    //782A31DTJ
    return this.http.get<ModelSerialResponse[]>(`${this.MODEL_SERIAL_API}/model-serialization-v2?client=${brand.modelSerialAPIBrandCode}&registrationCode=${registrationCode}`);
  }
}

export class RegistrationData {
  applianceType: string;
  applianceTypeCode: string;
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

export interface CategoryDTO {
  categoryCode: string;
  categoryName: string
  icon: string;
  ranking: number;
}

export interface CatalogueAPIResponse {
  status: string;
  result: any[];
}

export interface ModelSerialResponse {
  Client_Code: string;
  Brand_Code: string;
  Item_Type_Code: string;
  Default_Guarantee_Period_Parts: number;
  Model_Number: string;
  Serial_Number: string;
  Country__c: string;
  Client__c: string;
  Serialization_Provider: string;
  Serialization_Code: string;
  Model_Reference: string;
  Brand: string;
  Type: string;
  Default_Guarantee_Period_Labor: number;
  LoadDate: Date;
  LoadFilename: string;
}