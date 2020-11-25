import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UsersComponent } from './users.component';
import { UserInfoComponent } from './user-info.component';
import { UserEditComponent } from './user-edit.component';
import { UserAddComponent } from './user-add.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'users/add',
        component: UserAddComponent,
        data: {
          title: 'Add User'
        }
      },
      {
        path: 'users/:formId',
        component: UserInfoComponent,
        data: {
          title: 'Users Info'
        }
      },
      {
        path: 'users/edit/:formId',
        component: UserEditComponent,
        data: {
          title: 'Edit User'
        }
      },
     
    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
