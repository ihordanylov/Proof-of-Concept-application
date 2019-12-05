import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { Paginated } from '@feathersjs/feathers';

import { UserModel } from '../shared/modals';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userService = this.feathers.createService<UserModel>('user');

  constructor(
    private feathers: FeathersService,
  ) { }

  async createUser(user: UserModel): Promise<Paginated<UserModel[]> | UserModel> {
    return await this.userService.create(user);
  }

  async getUserById(user: UserModel): Promise<Paginated<UserModel[]> | UserModel> {
    return await this.userService.get(user.id);
  }

  async getUsers(): Promise<UserModel[] | Paginated<UserModel> | UserModel> {
    return await this.userService.find();
  }

  async updateUserById(user: UserModel): Promise<Paginated<UserModel[]> | UserModel> {
    return await this.userService.update(user.id, user);
  }

  async removeUserById(user: UserModel): Promise<Paginated<UserModel[]> | UserModel> {
    return await this.userService.remove(user.id);
  }
}
