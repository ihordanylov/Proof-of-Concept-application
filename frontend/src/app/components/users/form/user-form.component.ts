import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { UserService } from '../../../services/user.service';
import { routerConst } from '../../../shared/constants';

@Component({
  selector: 'app--user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @HostBinding('class.col-6') private useClass = true;

  public selectedUser;
  public userForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(
      filter((params: Params) => !!params)
    ).subscribe((params: Params) => {
        this.selectedUser = Object.assign(params);
        this.userForm = new FormGroup({
          id: new FormControl(this.selectedUser ? this.selectedUser.id : ''),
          name: new FormControl(this.selectedUser ? this.selectedUser.name : '', Validators.required),
          email: new FormControl(this.selectedUser ? this.selectedUser.email : '', [Validators.required, Validators.email]),
          dateOfBirth: new FormControl(this.selectedUser ? this.selectedUser.dateOfBirth : '', Validators.required),
          status: new FormControl(this.selectedUser ? this.selectedUser.status : '', Validators.required),
          hourlyRate: new FormControl(this.selectedUser ? this.selectedUser.hourlyRate : '', Validators.required),
        });
    });
  }

  onSubmit(): void {
    this.selectedUser.hasOwnProperty('id') ? this.updateUserByiD() : this.createUser();
  }

  private updateUserByiD(): void {
    this.userService.updateUserById(this.userForm.value).then(() => {
      this.router.navigate([`${routerConst.users}`]);
    });
  }

  private createUser(): void {
    this.userService.createUser(this.userForm.value).then(() => {
      this.router.navigate([`${routerConst.users}`]);
    });
  }
}
