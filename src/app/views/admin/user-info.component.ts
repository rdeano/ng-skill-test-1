import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { User } from '../../models/Users';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: [
  ]
})
export class UserInfoComponent implements OnInit {

  id: string;
  user: User =  new User();

  constructor(private route: ActivatedRoute,
    private apiService: UsersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('formId');

    this.getById(this.id);
  }

  getById(id) {
    this.apiService.getById(id).subscribe((data: any) => {
      this.user = data;
    })
  }



}
