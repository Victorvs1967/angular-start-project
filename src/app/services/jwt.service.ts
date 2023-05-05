import { Injectable, NgModule } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Injectable()
@NgModule()
export class JwtService {

  decodeToken(token: string): any {
    return JSON.parse(JSON.stringify(jwt_decode(token)))
  }

  setToken(token: string): string {
    sessionStorage.setItem('token', token ? token : '');
    return token;
  }

  getToken(): string {
    const token: string | null = sessionStorage.getItem('token');
    return token ? token : '';
  }

  cleanToken() {
    sessionStorage.removeItem('token');
  }

  getUsername(): string {
    return this.decodeToken(this.getToken()).sub;
  }

  getRole(): string {
    return this.decodeToken(this.getToken()).role;
  }
}
