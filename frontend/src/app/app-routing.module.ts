import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { JobComponent } from './components/job/job.component';
import { JobDetailsComponent } from './components/job/job-details/job-details.component';
import { JobFormComponent } from './components/job/job-form/job-form.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserFormComponent } from './components/users/form/user-form.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'change',
        component: UserFormComponent
      },
      {
        path: 'add',
        component: UserFormComponent
      },
      {
        path: ':id',
        component: UserDetailsComponent
      },
    ]

  },
  {
    path: 'job',
    component: JobComponent,
    children: [
      {
        path: 'change',
        component: JobFormComponent
      },
      {
        path: 'add',
        component: JobFormComponent
      },
      {
        path: ':id',
        component: JobDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
