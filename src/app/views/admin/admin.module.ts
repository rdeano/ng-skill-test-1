import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserInfoComponent } from './user-info.component';
import { UserEditComponent } from './user-edit.component';
import { UserAddComponent } from './user-add.component'
import { ReactiveFormsModule  } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, UsersComponent, UserInfoComponent, UserEditComponent, UserAddComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule ,
  ]
})
export class AdminModule { }
