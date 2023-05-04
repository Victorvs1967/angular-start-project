import { Component, inject } from '@angular/core';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { modal } from 'src/app/service/dialog.decorator';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  dialog = inject(DialogService);

  @modal(LoginComponent)
  login() { }
}
