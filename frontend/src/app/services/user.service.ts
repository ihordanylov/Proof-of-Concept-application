import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { Paginated } from '@feathersjs/feathers';

import { UserModel } from '../shared/modals';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userService = this.feathers.createService<UserModel>('user');

  constructor(
    private feathers: FeathersService,
    private crudService: CrudService
  ) { }

  createUser(user: UserModel): Promise<UserModel[] | UserModel> {
    return this.crudService.create(this.userService, user);
  }

  getUserById(user: UserModel): Promise<UserModel[] | UserModel> {
    return this.crudService.getById(this.userService, user);
  }

  getUsers(): Promise<UserModel[] | Paginated<UserModel> | UserModel> {
    return this.crudService.get(this.userService);
  }

  updateUserById(user: UserModel): Promise<UserModel[] | UserModel> {
    return this.crudService.update(this.userService, user);
  }

  removeUserById(user: UserModel): Promise<UserModel[] | UserModel> {
    return this.crudService.delete(this.userService, user);
  }
}
