import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit { 

  loading : boolean = false;
  invalidLogin : boolean = false;


  constructor(private _authService : AuthService,
              private _router: Router) {

    if (localStorage.getItem("token") !== null) {
      this._router.navigateByUrl('/admin');
    }
  }

  ngOnInit():void {

  
    
  }



  loginUser(form : NgForm) {
    
    if (form.value.username == "" || form.value.password == "") {
      return;
    }

    this.invalidLogin = false;
    this.loading = true;

    const body = {
      username : form.value.username,
      password : form.value.password
    }

    if (this._authService.login(body)) {
      this.loading=false;
      this._router.navigateByUrl('admin');
    }else {
      this.loading=false;
      this.invalidLogin=true;
    }
  }



}
