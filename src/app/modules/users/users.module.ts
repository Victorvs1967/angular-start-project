import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';


@NgModule({
  declarations: [
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialUiModule,
  ]
})
export class UsersModule { }
