import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  async create(service, data): Promise<[]> {
    return await service.create(data);
  }

  async get(service): Promise<[]> {
    return await service.find();
  }

  async getById(service, data): Promise<[]> {
    return await service.find(data.id);
  }

  async update(service, data): Promise<[]> {
    return await service.update(data.id, data);
  }

  async delete(service, data): Promise<[]> {
    return await service.remove(data.id, data);
  }
}
