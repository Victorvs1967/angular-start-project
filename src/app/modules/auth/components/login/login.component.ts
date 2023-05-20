import { Component, Inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from 'src/app/models/login-data.model';
import { SignupComponent } from '../signup/signup.component';
import { modal } from 'src/app/services/dialog.decorator';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm: UntypedFormGroup;
  isLogin: Observable<boolean> | undefined;
  isAdmin: Observable<boolean> | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LoginData,
    private formBuilder: FormBuilder,
    private auth: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: [ '', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  submit(): void {
    this.auth.login(this.loginForm.value)
      .pipe(
        map(res => {
          this.isLogin = this.auth.isLoggedIn;
          this.isAdmin = this.auth.isAdmin;
        })
      ).subscribe();
  }

  @modal(SignupComponent)
  signup() {}

}
