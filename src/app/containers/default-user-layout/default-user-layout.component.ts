import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navItems } from '../../_navUser';

@Component({
  selector: 'app-default-user-layout',
  templateUrl: './default-user-layout.component.html',
  styleUrls: ['./default-user-layout.component.scss']
})
export class DefaultUserLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/user/login');
  }

}
