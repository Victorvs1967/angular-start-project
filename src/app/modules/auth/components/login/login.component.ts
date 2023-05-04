import { Component, Inject } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginData } from 'src/app/model/login-data.model';
import { SignupComponent } from '../signup/signup.component';
import { modal } from 'src/app/service/dialog.decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LoginData,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: [ '', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  submit() {
    console.log(this.loginForm.value);
  }

  @modal(SignupComponent)
  signup() {}

}
