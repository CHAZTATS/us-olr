import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { brand } from '../../../../config/brand/brand';
import { environment } from '../../../../config/environment/environment';
import { ApplianceType } from '../../pages/appliance-type/appliance-type.container';
import { Appliance } from '../../pages/appliance/appliance.container';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  CATALOGUE_API = 'https://api.catalogue.common.use1.test.test.domgenusa-test.cloud/v1';
  MODEL_SERIAL_API = 'https://api.aws.preprod.domgen-usa.com/v1';
  ADDRESSY_API_PREFIX = environment.addressyApiPrefix;
  ADDRESSY_API_SUFFIX = environment.addressyApiSuffix;
  ADDRESSY_KEY = environment.addressyKey;
  BRAND = brand;
  regData: RegistrationData;

  applianceTypes: ApplianceType[] = [];
  appliances: Appliance[] = [];

  constructor(private http: HttpClient) {
    this.regData = new RegistrationData();
  }

  getApplianceCategories(): Observable<ApplianceType[]> {
    if (this.applianceTypes.length < 1) {
      return this.http.get<CatalogueAPIResponse>(`${this.CATALOGUE_API}/brands/${this.BRAND.categoriesAPIBrandCode}/categories`).pipe(
        map(x => {
          x.result.forEach(y => {
            let applianceType = {} as ApplianceType;
            applianceType.icon = y.icon;
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
      return this.http.get<CatalogueAPIResponse>(`${this.CATALOGUE_API}/brands/${this.BRAND.categoriesAPIBrandCode}/products?categoryCode=${this.regData.applianceTypeCode}`).pipe(
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

  searchAddress(search: string) {
    return this.http.get<AddressyResponse>(`${this.ADDRESSY_API_PREFIX}/Find/${this.ADDRESSY_API_SUFFIX}`, {
      params: {
        Countries: 'USA',
        Key: this.ADDRESSY_KEY,
        Language: 'en-US',
        Origin: 'USA',
        Text: search,
      },
    })
  }

  getAddressById(id: string): Observable<SelectedAddressyAddress> {
    return this.http
      .get<AddressySelectedAddressResponse>(`${this.ADDRESSY_API_PREFIX}/Retrieve/${this.ADDRESSY_API_SUFFIX}`, {
        params: {
          Id: id,
          Key: this.ADDRESSY_KEY,
        },
      })
      .pipe(map((result: { Items: SelectedAddressyAddress[] }) => result.Items[0]));
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

export interface Address {
  addressLine1: string;
  addressLine2: string;
  towncity: string;
  state: string;
  zipcode: string;
}

export interface AddressyResponse {
  Items: AddressyAddress[];
}

export interface AddressyAddress {
  Id: string;
  Type: string;
  Text: string;
  Highlight: string;
  Description: string;
}

export interface AddressySelectedAddressResponse {
  Items: SelectedAddressyAddress[];
}

export interface SelectedAddressyAddress {
  AdminAreaCode: string;
  AdminAreaName: string;
  Barcode: string;
  Block: string;
  BuildingName: string;
  BuildingNumber: string;
  City: string;
  Company: string;
  CountryIso2: string;
  CountryIso3: string;
  CountryIsoNumber: number;
  CountryName: string;
  DataLevel: string;
  Department: string;
  District: string;
  DomesticId: string;
  Field1: string;
  Field2: string;
  Field3: string;
  Field4: string;
  Field5: string;
  Field6: string;
  Field7: string;
  Field8: string;
  Field9: string;
  Field10: string;
  Field11: string;
  Field12: string;
  Field13: string;
  Field14: string;
  Field15: string;
  Field16: string;
  Field17: string;
  Field18: string;
  Field19: string;
  Field20: string;
  Id: string;
  Label: string;
  Language: string;
  LanguageAlternatives: string;
  Line1: string;
  Line2: string;
  Line3: string;
  Line4: string;
  Line5: string;
  Neighbourhood: string;
  POBoxNumber: string;
  PostalCode: string;
  Province: string;
  ProvinceCode: string;
  ProvinceName: string;
  SecondaryStreet: string;
  SortingNumber1: string;
  SortingNumber2: string;
  Street: string;
  SubBuilding: string;
  Type: string;
}