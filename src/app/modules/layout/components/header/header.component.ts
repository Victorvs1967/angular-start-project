import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { SignupComponent } from 'src/app/modules/auth/components/signup/signup.component';
import { AuthService } from 'src/app/services/auth.service';
import { modal } from 'src/app/services/dialog.decorator';
import { DialogService } from 'src/app/services/dialog.service';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent extends CommonComponent {

  dialog = inject(DialogService);
  private auth = inject(AuthService);

  isLogin: Observable<boolean> = this.auth.isLoggedIn;

  constructor(public override router: Router) {
    super(router)
  }

  @modal(LoginComponent)
  login() {
    this.router.navigate([ '/main' ]);
  }

  @modal(SignupComponent)
  addUser() {
    this.reloadComponent(true);
  }

  logout() {
    this.auth.logout();
    this.router.navigate([ '/main' ]);
  };

}
