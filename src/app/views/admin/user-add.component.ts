import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/Users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styles: [
  ]
})
export class UserAddComponent implements OnInit {

  user: User = new User();
  profileForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private apiService: UsersService,
    private router: Router) { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })

  }

  get email() { return this.profileForm.get('email'); }
  get password() { return this.profileForm.get('password'); }



  onSubmit() {
    this.user.firstname = this.profileForm.value.firstname;
    this.user.lastname = this.profileForm.value.lastname;
    this.user.email = this.profileForm.value.email;
    this.user.password = this.profileForm.value.password;

    this.apiService.add(this.user).subscribe(
      result => {

      },
      error => {
        alert(error.message);
      },
      () => { 
        this.router.navigateByUrl('/admin/users');
      }
    )
  }


}
