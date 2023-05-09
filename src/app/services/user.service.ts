import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.baseUrl.concat(environment.userUrl));
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(environment.baseUrl.concat(environment.userUrl, '/', username));
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(environment.baseUrl.concat(environment.userUrl), user);
  }

  deleteUser(username: string): Observable<User> {
    return this.http.delete<User>(environment.baseUrl.concat(environment.userUrl, '/', username));
  }

}
