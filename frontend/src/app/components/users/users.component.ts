import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Paginated } from '@feathersjs/feathers';
import { filter } from 'rxjs/operators';

import { routerConst } from '../../shared/constants';
import { UserModel } from '../../shared/modals';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  public usersList: UserModel[];
  public displayedColumns = ['id', 'name', 'dateOfBirth', 'email', 'status', 'hourlyRate'];
  public routerConst = routerConst;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd && event.url === `${routerConst.users}`)
    ).subscribe(() => this.initComponent());
    this.initComponent();
  }

  initComponent(): void {
    this.userService.getUsers().then((res: Paginated<UserModel> ) => {
      this.usersList = res.data;
    });
  }

  routeChangeClick(): void {
    this.router.navigate([`${routerConst.users}${routerConst.add}`]);
  }
}
