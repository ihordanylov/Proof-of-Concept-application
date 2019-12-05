import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { routerConst } from '../../../shared/constants';
import { JobService } from '../../../services/job.service';
import { JobModel } from '../../../shared/modals';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})

export class JobDetailsComponent implements OnInit {

  @HostBinding('class.col-6') private useClass = true;

  public selectedJob: JobModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService
  ) {
    this.route.params.pipe(
      filter((params: Params) => !!params)
    ).subscribe(params => {
      this.selectedJob = params as JobModel;
    });
  }

  ngOnInit() {
  }

  makeChanges(selectedJob: JobModel): void {
    this.router.navigate([`${routerConst.job}${routerConst.change}`, selectedJob]);
  }

  deleteSelected(selectedJob: JobModel): void {
    this.jobService.removeJobsById(selectedJob).then(() => {
      this.router.navigate([`${routerConst.job}`]);
    });
  }
}
