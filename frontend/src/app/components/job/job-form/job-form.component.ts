import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

import { JobService } from '../../../services/job.service';
import { routerConst } from '../../../shared/constants';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})

export class JobFormComponent implements OnInit {

  @HostBinding('class.col-6') private useClass = true;

  public selectedJob;
  public jobForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(
      filter((params: Params) => !!params)
    ).subscribe((params: Params) => {
        this.selectedJob = Object.assign(params);
        this.jobForm = new FormGroup({
          id: new FormControl(this.selectedJob ? this.selectedJob.id : ''),
          title: new FormControl(this.selectedJob ? this.selectedJob.title : '', Validators.required),
          description: new FormControl(this.selectedJob ? this.selectedJob.description : '', Validators.required)
        });
    });
  }

  onSubmit(): void {
    this.selectedJob.hasOwnProperty('id') ? this.updateJobById() : this.createJob();
  }

  private updateJobById(): void {
    this.jobService.updateJobsById(this.jobForm.value).then(() => {
      this.router.navigate([`${routerConst.users}`]);
    });
  }

  private createJob(): void {
    this.jobService.createJob(this.jobForm.value).then(() => {
      this.router.navigate([`${routerConst.job}`]);
    });
  }
}
