import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../service/users.service';
import { User } from '../../../app/models/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  user: User;

  constructor(private apiService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.apiService.get().subscribe((data: any) => {
      this.user = data;
    })
  }

  remove(item) {
    this.apiService.delete(item).subscribe(
      result => {
        
      },
      error => {
        alert(error.message);
      },
      () => {
        this.getUsers();
      }
    )
  }

}
