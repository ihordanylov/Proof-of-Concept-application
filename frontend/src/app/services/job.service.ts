import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { Paginated } from '@feathersjs/feathers';

import { CrudService } from './crud.service';
import { JobModel } from '../shared/modals';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobService = this.feathers.createService<JobModel>('job');

  constructor(
    private feathers: FeathersService,
    private crudService: CrudService
  ) { }

  createJob(job: JobModel): Promise<JobModel[] | JobModel> {
    return this.crudService.create(this.jobService, job);
  }

  getJobById(retrievedJob: JobModel): Promise<JobModel[] | JobModel> {
    return this.crudService.getById(this.jobService, retrievedJob.id);
  }

  getJobs(): Promise<JobModel[] | Paginated<Promise<JobModel> | JobModel>> {
    return this.crudService.get(this.jobService);
  }

  async updateJobsById(job: JobModel): Promise<JobModel[] | JobModel> {
    return await this.crudService.update(this.jobService, job);
  }

  async removeJobsById(job: JobModel): Promise<JobModel[] | JobModel> {
    return await this.crudService.delete(this.jobService, job);
  }
}
