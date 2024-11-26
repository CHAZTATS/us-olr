import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { filter, mergeMap, Observable } from 'rxjs';
import { environment } from '../../../../config/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RecaptchaService implements HttpInterceptor {
  constructor(private recaptchaService: ReCaptchaV3Service) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.recaptchaService.execute('getToken').pipe(
      filter((token) => !!token),
      mergeMap((token: string) => {
        let newHeaders = this.addAuthHeaders(req.headers, token);
        if (req.url.includes('serialization')) {
          newHeaders = newHeaders.append(AuthHeaderNames.X_API_KEY, environment.modelSerialAPIKey);
        }
        if (req.url.includes('quote') || req.url.includes('plan')) {
          newHeaders = newHeaders.append(AuthHeaderNames.X_API_KEY, environment.quoteAPIKey);
        }
        const newReq = req.clone({ headers: newHeaders });
        return next.handle(newReq);
      })
    );
  }

  addAuthHeaders(newHeaders: HttpHeaders, token: string): HttpHeaders {

    return newHeaders
      .append(httpHeaders.X_RECAPTCHA_TOKEN, token)
      // .append(AuthHeaderNames.CLIENT, 'DandGUK')
      .append(AuthHeaderNames.REQUEST_ACTION, 'OLR')
      .append(AuthHeaderNames.REQUEST_SOURCE, 'DandGUS')

    // .append(AuthHeaderNames.X_API_KEY, 'HZRqLnZPGZ2QTgifn0Yw29ykai2g8f3h1bqh9E16')

    // return newHeaders.append(
    //   'Authorization',
    //   `Basic REdlQ29tOjU2MDI4OTY3ODU1MjRlNTNiNTM0NDc1ZjQ3YzkwNmE0`
    // );
  }
}

export enum httpHeaders {
  X_CORRELATION_ID = 'x-correlation-id',
  X_RECAPTCHA_TOKEN = 'x-recaptcha-token',
}

export enum AuthHeaderNames {
  REQUEST_SOURCE = 'request-source',
  REQUEST_ACTION = 'request-action',
  CLIENT = 'wl-client',
  X_API_KEY = 'x-api-key'
}