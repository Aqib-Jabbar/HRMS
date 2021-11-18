import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  takeToken:any;
  constructor(private _auth:AuthService) {
  }
  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey=this.takeToken;
    
    this.getTokenForHeaders();
    return next.handle(request.clone({setHeaders:{apiKey}}));
  }

getTokenForHeaders(){
  this._auth.getAccessTokenSilently().subscribe(res => {
    this.takeToken= res
  })
}
}

// working on it yet