import { Component, OnInit } from '@angular/core';
import { User } from '../../models/Users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  user: User = new User();

  constructor(private apiService: UsersService) { }

  ngOnInit(): void {

    //test only on JWT Token Authorization
    var id = localStorage.getItem("id");
    this.apiService.testAuthJWT(id).subscribe((data: any) => {
      this.user = data;
    })

  }

}
