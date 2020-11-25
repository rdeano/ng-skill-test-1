import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  validuser: boolean = false;

  constructor(private apiService: UsersService) { }

  //admin
  loggedIn() {
    if (localStorage.getItem("token") == "!@#$%^&*()") {
      return true;
    }else {
      return false;
    }
  }

  //admin
  login(body) : boolean {
    if (body.username == "admin" && body.password == "admin") {
      localStorage.setItem("token","!@#$%^&*()");
      return true;
    }else {
      return false;
    }
  }

  //user
  loggedInUser() {
    if (localStorage.getItem("usertoken")) {
      return true;
    } else {
      return false;
    }
  }

  


}
