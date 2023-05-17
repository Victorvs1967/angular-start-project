import { Component, Inject, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/models/role.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {

  signupForm: UntypedFormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: UntypedFormBuilder,
    private auth: AuthService,
  ) {
    this.signupForm = this.formBuilder.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ],
      email: [ '', Validators.required ],
      firstName: [ '' ],
      lastName: [ '' ],
      role: [ Role.USER] ,
    });
  }

  submit() {
    this.auth.signup(this.signupForm.value)
      .subscribe();
  }

}
