import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { ApplianceType } from '../../pages/appliance-type/appliance-type.container';
import { Appliance } from '../../pages/appliance/appliance.container';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  CATALOGUE_API = 'https://api.catalogue.common.use1.test.test.domgenusa-test.cloud/v1'
  BRAND = environment.brand;
  regData: RegistrationData;

  constructor(private http: HttpClient) {
    this.regData = new RegistrationData();
  }

  getApplianceCategories(): Observable<ApplianceType[]> {
    return this.http.get<CatalogueAPIResponse>(`${this.CATALOGUE_API}/brands/${this.BRAND}/categories`).pipe(
      map(x => {
        console.log(x);
        let list = [] as ApplianceType[];
        console.log(x.result);
        x.result.forEach(y => {
          let applianceType = {} as ApplianceType;
          applianceType.icon = y.icon;
          applianceType.icon = 'mug-saucer';
          applianceType.text = y.categoryName;
          applianceType.code = y.categoryCode;
          list.push(applianceType);
        })
        return list;
      })
    );
  }

  getAppliances(): Observable<Appliance[]> {
    return this.http.get<CatalogueAPIResponse>(`${this.CATALOGUE_API}/brands/${this.BRAND}/products?categoryCode=${this.regData.applianceTypeCode}`).pipe(
      map(x => {
        console.log(x);
        let list = [] as Appliance[];
        console.log(x.result);
        x.result.forEach(y => {
          let appliance = {} as Appliance;
          appliance.text = y.applianceName;
          list.push(appliance);
        })
        return list;
      })
    );;
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