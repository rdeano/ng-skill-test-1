import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { RegisterComponent } from './views/register/register.component';

import { AuthGuard } from './auth/auth.guard';
import { DefaultUserLayoutComponent } from './containers/default-user-layout/default-user-layout.component';
import { AuthUserGuard } from './auth/auth-user.guard';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'user/login',
    loadChildren: () => import('./views/login-user/login-user.module').then(m => m.LoginUserModule),
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'user',
    component: DefaultUserLayoutComponent,
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
        canActivate: [AuthUserGuard]
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
