import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/Users';
import { UsersService } from '../../service/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
  ]
})
export class UserEditComponent implements OnInit {

  id: number;
  user: User = new User();
  profileForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private apiService: UsersService,
    private router : Router) { }

  ngOnInit(): void {


    this.profileForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(''),
    })

    this.id = Number(this.route.snapshot.paramMap.get('formId'));

    this.getById(this.id);
  }

  get email() { return this.profileForm.get('email'); }


  getById(id) {
    this.apiService.getById(id).subscribe((data: any) => {
      this.profileForm.setValue({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password : data.password,
      })
    })
  }

  onSubmit() {

    this.user.id = this.id;
    this.user.firstname = this.profileForm.value.firstname;
    this.user.lastname = this.profileForm.value.lastname;
    this.user.email = this.profileForm.value.email;
    this.user.password = this.profileForm.value.password;

    this.apiService.update(this.user).subscribe(
      result => {

      },
      error => {
        alert(error.message)
      },
      () => {
        this.router.navigateByUrl('/admin/users');
      }
    )

    //this.apiService.update(this.user).subscribe((data: any) => {
    //  alert('ok');
    //}, (error: any) => {
    //    alert('error');
    //})
   
  }

}
