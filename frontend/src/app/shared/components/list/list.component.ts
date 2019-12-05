import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JobModel, UserModel } from '../../modals';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public selectedId: number;

  @Input() dataSource: JobModel[] | UserModel[];
  @Input() displayedColumns;
  @Input() routeConst;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  routeChangeClick(event: Event, row: JobModel): void {
    this.selectedId = row.id;
    const params = {
      ...row,
    };
    this.router.navigate([`${this.routeConst}/${row.id}`, params]);
  }

}
