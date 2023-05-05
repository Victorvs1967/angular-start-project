import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private jwt = inject(JwtService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwt.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          'authorization': 'Bearer '.concat(token)
        }
      });
    }
    return next.handle(request);
  }
}
