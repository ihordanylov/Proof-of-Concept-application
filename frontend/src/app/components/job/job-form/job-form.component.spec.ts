import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobForm } from './job-form.component';

describe('ChangeJobComponent', () => {
  let component: JobForm;
  let fixture: ComponentFixture<JobForm>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobForm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
