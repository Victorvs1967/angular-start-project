import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtService } from './jwt.service';
import { LoginData } from '../models/login-data.model';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwt = inject(JwtService);
  private http = inject(HttpClient);

  private loggedIn = new BehaviorSubject<boolean>(false);
  private adminIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    this.loggedIn.next(this.onLogin());
    return this.loggedIn.asObservable();
  }

  get isAdmin(): Observable<boolean> {
    this.adminIn.next(this.onAdmin());
    return this.adminIn.asObservable();
  }

  onLogin(): boolean {
    return this.jwt.getToken() ? true : false;
  }

  onAdmin(): boolean {
    return this.jwt.getRole() === Role.ADMIN || this.jwt.getRole() === Role.MODERATOR;
  }

  login(user: LoginData): Observable<any | boolean> {
    return this.http.post(environment.baseUrl.concat(environment.authUrl, environment.login), user)
      .pipe(
        map((token: any) => {
          if (user.username && user.password) {
            this.jwt.cleanToken();
            this.jwt.setToken(token.token);
            this.loggedIn.next(true);
            (this.jwt.getRole() === Role.ADMIN || this.jwt.getRole() === Role.MODERATOR) ?
              this.adminIn.next(true) : this.adminIn.next(false);
            return of(true);
          }
          this.loggedIn.next(false);
          this.adminIn.next(false);
          return throwError(() => new Error('Login Failed...'));
        })
      );
  }

  signup(user: User): Observable<any | boolean> {
    return this.http.post(environment.baseUrl.concat(environment.authUrl, environment.signup), user);
  }

  logout(param = true) {
    if (param) {
      this.jwt.cleanToken();
      this.loggedIn.next(false);
      this.adminIn.next(false);
      setTimeout(() => {}, 500);
      return true;
    }
    return false;
  }
}
