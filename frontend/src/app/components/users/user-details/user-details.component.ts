import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { UserService } from '../../../services/user.service';
import { routerConst } from '../../../shared/constants';
import { UserModel } from '../../../shared/modals';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})

export class UserDetailsComponent implements OnInit {

  @HostBinding('class.col-6') private useClass = true;

  public selectedUser: UserModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.route.params.pipe(
      filter((params: Params) => !!params)
    ).subscribe(params => {
      this.selectedUser = params as UserModel;
    });
  }

  ngOnInit() {
  }

  makeChanges(selectedUser: UserModel): void {
    this.router.navigate([`${routerConst.users}${routerConst.change}`, selectedUser]);
  }

  deleteSelected(selectedUser: UserModel): void {
    this.userService.removeUserById(selectedUser).then(() => {
      this.router.navigate([`${routerConst.users}`]);
    });
  }
}
