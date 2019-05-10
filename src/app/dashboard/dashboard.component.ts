import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardService]
})



export class DashboardComponent implements OnInit {

 
  userobj: any;
  name: any;
  openedNav: boolean;
  showHideTitle = true;
  title  = 'Dashboard';

 
  @ViewChild('custSideNav') custSideNav: ElementRef;
  @ViewChild('drawer') drawer: ElementRef;



constructor(private breakpointObserver: BreakpointObserver, private router: Router,
  public dialog: MatDialog, private toastr: ToastrService, private dashboardService: DashboardService) {
   
   // this.userobj = localStorage.getItem('username');
  }

  ngOnInit() {
   

  }

logout() {
  this.router.navigateByUrl('/login');
  this.toastr.info('<div style="font">Message in red.</div>', 'logout succesfully');
}











}
