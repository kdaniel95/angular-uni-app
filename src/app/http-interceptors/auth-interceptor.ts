import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken ?? ''),
    });

    if(authToken != null){
    const helper = new JwtHelperService();

    const decoded = helper.decodeToken(authToken);

    if (decoded != null) {
      this.auth.setUserData(JSON.stringify(decoded));
    }
  }

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
