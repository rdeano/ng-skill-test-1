import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertsComponent } from '../notifications/alerts.component';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent,AlertsComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AlertModule.forRoot(),
    FormsModule
  ],

})
export class LoginModule { }
