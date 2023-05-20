import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { modal } from 'src/app/services/dialog.decorator';
import { UserService } from 'src/app/services/user.service';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { CommonComponent } from 'src/app/modules/layout/components/common/common.component';
import { AppDataSource } from 'src/app/data/data-source';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent extends CommonComponent {

  displayedColumns = [ 'username', 'email', 'fullName', 'role', 'onCreate', 'onUpdate' ];
  dataSource: any;

  isLogin: Observable<boolean> = this.auth.isLoggedIn;
  static user: User;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    public override router: Router,
    ) {
      super(router);
  }

  override ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void{
    this.userService.getUsers().pipe(
      map(data => this.dataSource = new  AppDataSource([ ...data ])))
      .subscribe();
  }

  editUser(user: User) {
    UsersListComponent.user = user;
    if (this.auth.isAdmin) this.getUser();
}

  @modal(UserEditComponent, UsersListComponent.user)
  getUser() {
    this.reloadComponent(true);
  }

  reload() {
    this.reloadComponent(false, '/main/users')
  }
}
