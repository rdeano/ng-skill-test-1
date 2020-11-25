import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Local } from 'protractor/built/driverProviders';
import { AuthService } from '../../service/auth.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loading: boolean = false;
  invalidLogin: boolean = false;

  constructor(private _authService: AuthService,
    private apiService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }



  loginUser(form: NgForm) {

    if (form.value.username == "" || form.value.password == "") {
      return;
    }

    this.loading = true;

    const body = {
      email: form.value.username,
      password: form.value.password
    }

    this.apiService.validateuser(body).subscribe(
      (data: any) => {
        if (data != null) {
          this.invalidLogin = false;
          localStorage.setItem("id", data.id);
          localStorage.setItem("usertoken", data.token);
        } else {
          this.invalidLogin = true;
        }

    }, (error: any) => {
        this.loading = false;
        alert(error);
    }, () => {
        this.loading = false;

        if (!this.invalidLogin) {
          this.router.navigateByUrl('user/home');
      }
    })


  }

}
