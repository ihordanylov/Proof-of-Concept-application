import { Injectable } from '@angular/core';
import { FeathersService } from '../shared/feathers.service';
import { Paginated } from '@feathersjs/feathers';

import { JobModel } from '../shared/modals';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobService = this.feathers.createService<JobModel>('job');

  constructor(
    private feathers: FeathersService,
  ) { }

  async createJob(job: JobModel): Promise<JobModel[] | JobModel> {
    return await this.jobService.create(job);
  }

  async getJobById(retrievedJob: JobModel): Promise<JobModel[] | JobModel> {
    return await this.jobService.get(retrievedJob.id);
  }

  async getJobs(): Promise<JobModel[] | Paginated<JobModel> | JobModel> {
    return await this.jobService.find();
  }

  async updateJobsById(job: JobModel): Promise<JobModel[] | JobModel> {
    return await this.jobService.update(job.id, job);
  }

  async removeJobsById(job: JobModel): Promise<JobModel[] | JobModel> {
    return await this.jobService.remove(job.id);
  }
}
