import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Paginated } from '@feathersjs/feathers';

import { JobService } from '../../services/job.service';
import { JobModel } from '../../shared/modals';
import { routerConst } from '../../shared/constants';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobList: JobModel[];
  displayedColumns = ['id', 'title', 'description'];
  routerConst = routerConst;

  constructor(
    private router: Router,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd && event.url === `${routerConst.job}`)
    ).subscribe(() => this.initComponent());
    this.initComponent();
  }

  initComponent(): void {
    this.jobService.getJobs().then((res: Paginated<JobModel>) => {
      this.jobList = res.data;
    });
  }

  routeChangeClick(): void {
    this.router.navigate([`${routerConst.job}${routerConst.add}`]);
  }
}
