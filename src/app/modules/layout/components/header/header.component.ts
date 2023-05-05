import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { AuthService } from 'src/app/services/auth.service';
import { modal } from 'src/app/services/dialog.decorator';
import { DialogService } from 'src/app/services/dialog.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  dialog = inject(DialogService);
  private auth = inject(AuthService);
  private userService = inject(UserService);

  isLogin: Observable<boolean> | undefined = this.auth.isLoggedIn;

  @modal(LoginComponent)
  login() { }

  logout() {
    this.auth.logout();
  };

  userList() {
    this.userService.getUsers()
      .subscribe(users => console.log(users));
  }
}
