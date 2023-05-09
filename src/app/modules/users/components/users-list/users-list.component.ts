import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppDataSource } from 'src/app/data/data-source';
import { AuthService } from 'src/app/services/auth.service';
import { modal } from 'src/app/services/dialog.decorator';
import { UserService } from 'src/app/services/user.service';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  private auth = inject(AuthService);
  private userService = inject(UserService);

  displayedColumns = [ 'username', 'email', 'firstName', 'lastName', 'role', 'onCreate', 'onUpdate' ];
  dataSource: any;

  isLogin: Observable<boolean> = this.auth.isLoggedIn;
  static user: User;

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUsers()
      .pipe(
        map(data => this.dataSource = new AppDataSource([ ...data ]))
      )
      .subscribe();
  }

  editUser(user: User) {
    UsersListComponent.user = user;
    this.getUser();
  }

  @modal(UserEditComponent, UsersListComponent.user)
  getUser() {
  }
}
