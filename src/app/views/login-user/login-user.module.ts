import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from '../notifications/alerts.component';

import { LoginUserRoutingModule } from './login-user-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginUserRoutingModule,
    AlertModule.forRoot(),
    FormsModule
  ]
})
export class LoginUserModule { }
