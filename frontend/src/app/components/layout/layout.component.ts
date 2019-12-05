import { Component, OnInit } from '@angular/core';

import { routerConst } from '../../shared/constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public navLinks = [
    {
      label: 'User',
      path: routerConst.users,
    },
    {
      label: 'Job',
      path: routerConst.job,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
