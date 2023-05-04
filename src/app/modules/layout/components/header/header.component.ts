import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { modal } from 'src/app/service/dialog.decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @modal(LoginComponent)
  login() { }
}
