import { Component } from '@angular/core';
import { JobService } from './services/job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private jobService: JobService
    ) {
    //   setTimeout(() => {
    //   }, 500);
    }
}
