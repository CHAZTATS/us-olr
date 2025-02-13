import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { brand } from '../../../../config/brand/brand';
import { environment } from '../../../../config/environment/environment';
import { Appliance } from '../models/appliance';
import { ApplianceType } from '../models/appliance-type';

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

  checkoutAccessToken: string;

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
    return this.http.get<ModelSerialResponse[]>(`${this.MODEL_SERIAL_API}/model-serialization-v2?model=${modelNumber}&serial=${serialNumber}&client=WHIRL`);
  }

  getModelAndSerialNumberFromRegistrationCode(registrationCode?: string) {
    //782A31DTJ
    return this.http.get<ModelSerialResponse[]>(`${this.MODEL_SERIAL_API}/model-serialization-v2?client=WHIRL&registrationCode=${registrationCode}`);
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

  getQuote() {
    return this.http.post<any>(`https://api.aws.preprod.domgen-usa.com/v1/quote`, {
      "sessionId": "checking-123",
      "client": "Whirlpool",
      "channel": "Web",
      "system": "Registria",
      "country": "USA",
      "currency": "USD",
      "customer": {
        "firstName": "Charles",
        "lastName": "Taverner",
        "email": "chaztats@gmail.com",
        "phone": {
          "Home": "07471949230"
        },
        "billingAddress": {
          "line1": "180 Garth Rd Apt TE",
          "line2": "",
          "city": "Scarsdale",
          "state": "NY",
          "postalCode": "10583-3839",
          "country": "USA"
        }
      },
      "merchandise": [
        {
          "type": "Refrigerator",
          "merchandiseInGoodWorkingOrder": true,
          "brand": "KitchenAid",
          "serialNumber": "353213",
          "modelNumber": "132132131",
          "purchaseDate": "2024-10-31",
          "purchasePrice": "123",
          "purchaseFrom": "",
          "locatedAtMailingAddress": true
        }
      ]
    });
  }

  // getQuote() {
  //   return this.http.post<any>(`https://api.aws.preprod.domgen-usa.com/v1/quote`, this.buildQuoteAPIRequest());
  // }

  getCheckoutAuth() {
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', '607fs01m0nch6pf7gfk2t7od1j')
      .set('client_secret', '10a6o4oalu4mnnuf0bkvafds1b2p1vjo7vkvles8k44noi064os6');

    return this.http.post<CheckoutAuthResponse>(`https://prod-sandbox-regauth-internal.auth.us-east-1.amazoncognito.com/oauth2/token`, body);
  }

  getCheckoutUrl(quoteId: string) {
    let data = {
      "retailerDomain": "whirlpool.com",
      "payload": {
        "clientCode": "WHIRL",
        "channelCode": "Web Reg",
        "systemCode": "DandG_OLR",
        "journeyCode": "REG",
        "businessEventCode": "COCRE",
        "businessSource": "WEB",
        "interactionId": "whydoesntthiswork123",
        "userId": "DGOLR",
        "quoteId": quoteId,
        "person": {
          "initial": "N",
          "firstName": "John",
          "surname": "Nineteenth",
          "phone": [
            {
              "type": "L",
              "usage": "PER",
              "value": "+19876543218",
              "preferred": true
            }
          ],
          "email": [
            {
              "usage": "PER",
              "value": "nov19TESTone@dng.com",
              "preferred": true
            }
          ],
          "address": [
            {
              "addressLine1": "1002 Arlene Ct Apt 101",
              "addressLine2": "",
              "addressLine3": "Bloomington",
              "region": "IL",
              "postalCode": "61701",
              "countryCode": "USA",
              "addressCategoryCode": "BIL",
              "addressOverride": false
            }
          ]
        },
        "item": [
          {
            "itemIterationId": 1,
            "item": {
              "itemTypeCode": "WSHR",
              "manufacturerBrandCode": "WHIRL",
              "modelNumber": "1CWTW4705GW",
              "serialNumber": "CA0800839",
              "operationalStatusCode": "W",
              "purchase": {
                "price": 891.65,
                "currencyCode": "USD",
                "date": "2024-09-01",
                "retailer": "Whirlpool"
              },
              "address": [
                {
                  "addressLine1": "1002 Arlene Ct Apt 101",
                  "addressLine2": "",
                  "addressLine3": "Bloomington",
                  "region": "IL",
                  "postalCode": "61701",
                  "countryCode": "USA",
                  "addressCategoryCode": "BIL",
                  "addressOverride": false
                }
              ]
            }
          }
        ],
        "contract": {
          "isMultiplan": false,
          "attributes": [
            {
              "itemIterationId": 1,
              "netAmount": 6.99,
              "salesTaxAmount": 0,
              "salesTaxRate": 10,
              "serviceAmount": 17.00,
              "periodOfCover": 12,
              "effectiveDate": "2024-11-25"
            }
          ]
        }
      }
    };
    return this.http.post<any>(`https://us.prod-sandbox.api.dg-click-integrations.com/v1/itb/direct`, data);
  }

  buildQuoteAPIRequest(): QuoteAPIRequest {
    let request = new QuoteAPIRequest();
    request.sessionId = 'checking-123';
    request.client = 'Whirlpool';
    request.channel = 'Web';
    request.system = 'Registria';
    request.country = 'USA';
    request.currency = 'USD';

    let customer = {} as QuoteAPICustomer;

    customer.firstName = this.regData.customer.firstName;
    customer.lastName = this.regData.customer.lastName;
    customer.email = this.regData.customer.email;

    let phone = {} as QuoteAPIPhone;
    phone.Home = this.regData.customer.phone;

    customer.phone = phone;

    let billingAddress = {} as QuoteAPIBillingAddress;

    billingAddress.line1 = this.regData.customer.billingAddress.line1;
    billingAddress.line2 = this.regData.customer.billingAddress.line2;
    billingAddress.city = this.regData.customer.billingAddress.city;
    billingAddress.state = this.regData.customer.billingAddress.state;
    billingAddress.postalCode = this.regData.customer.billingAddress.postalCode;
    billingAddress.country = 'USA';

    customer.billingAddress = billingAddress;

    request.customer = customer;

    let merchandise = {} as Merchandise;

    merchandise.type = this.regData.appliance;
    merchandise.merchandiseInGoodWorkingOrder = true;
    merchandise.brand = this.BRAND.name;
    merchandise.serialNumber = this.regData.serialNumber;
    merchandise.modelNumber = this.regData.modelNumber;
    merchandise.purchaseDate = this.regData.date;
    merchandise.purchasePrice = this.regData.price;
    merchandise.purchaseFrom = '';
    merchandise.locatedAtMailingAddress = true;

    request.merchandise.push(merchandise);

    console.log(request);
    return request;
  }
}

export interface CheckoutAuthResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export class QuoteAPIRequest {
  sessionId: string;
  client: string;
  channel: string;
  system: string;
  country: string;
  currency: string;
  customer: QuoteAPICustomer;
  merchandise: Merchandise[] = [];
}


interface QuoteAPICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: QuoteAPIPhone;
  billingAddress: QuoteAPIBillingAddress;
}

interface QuoteAPIPhone {
  Home: string;
}

interface QuoteAPIBillingAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
interface Merchandise {
  type: string;
  merchandiseInGoodWorkingOrder: boolean;
  brand: string;
  serialNumber: string;
  modelNumber: string;
  purchaseDate: string;
  purchasePrice: string;
  purchaseFrom: string;
  locatedAtMailingAddress: boolean;
}

export class RegistrationData {
  applianceType: string;
  applianceTypeCode: string;
  appliance: string;
  registrationCode: string;
  modelNumber: string;
  serialNumber: string;
  price: string;
  date: string;
  didYouBuyAPlan: boolean;
  plannedPurchases: string[];

  customer: RegistrationCustomer;

  constructor() {

  }
}

export interface RegistrationCustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  billingAddress: Address;
}

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: 'USA';
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
  clientCode: string;
  brandCode: string;
  itemTypeCode: string;
  defaultGuaranteePeriodParts: number;
  modelNumber: string;
  serialNumber: string;
  country: string;
  client: string;
  serializationProvider: string;
  serializationCode: string;
  modelReference: string;
  brand: string;
  type: string;
  defaultGuaranteePeriodLabor: number;
  loadDate: Date;
  loadFilename: string;
  icon: string;
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