import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { UsersListComponent } from '../users-list/users-list.component';
import { Role } from 'src/app/models/role.model';
import { UserRole } from 'src/app/models/user-role.model';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent {

  user: User;
  userForm: UntypedFormGroup;

  roles: UserRole[] = [
    { value: Role.ADMIN, viewValue: Role.ADMIN },
    { value: Role.USER, viewValue: Role.USER },
    { value: Role.MODERATOR, viewValue: Role.MODERATOR },
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: UntypedFormBuilder,
    private auth: AuthService,
    private userServise: UserService,
  ) {
    this.user = UsersListComponent.user;

    this.userForm = this.formBuilder.group({
      username: [this.user.username, Validators.required],
      email: [this.user.email, Validators.required],
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      role: [this.user.role, Validators.required],
    });
  }

  submit() {
    this.userServise.editUser({
      ...this.user,
      ...this.userForm.value
    })
    .subscribe();
  }
}
