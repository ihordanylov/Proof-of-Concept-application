import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UsersComponent } from './components/users/users.component';
import { JobComponent } from './components/job/job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './shared/components/list/list.component';
import { JobDetailsComponent } from './components/job/job-details/job-details.component';
import { JobFormComponent } from './components/job/job-form/job-form.component';
import { UserFormComponent } from './components/users/form/user-form.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';

// Material Module
import { MatTableModule, MatTabsModule, MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

// Services
import { JobService } from './services/job.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UsersComponent,
    JobComponent,
    ListComponent,
    JobDetailsComponent,
    JobFormComponent,
    UserFormComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Material Components
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [ JobService, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
