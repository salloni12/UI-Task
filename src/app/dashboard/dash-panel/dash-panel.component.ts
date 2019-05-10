import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from "@angular/router";
import { DashboardService } from '../dashboard.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dash-panel',
  templateUrl: './dash-panel.component.html',
  styleUrls: ['./dash-panel.component.scss'],
  providers: [DashboardService]

})

export class DashPanelComponent implements OnInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private dashboardService: DashboardService, private toastr:ToastrService) { }
  dataSource: any;
  data: any;
  updateId;
 
 
  displayedColumns: string[] = ['name', 'email', 'number', 'gender', 'address',  'action'];
  selection = new SelectionModel(true, []);

  ngOnInit() {
    this.dashboardService.getall().subscribe(val => { console.log(val)
      this.dataSource = new MatTableDataSource (val); 
      this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      });

  }


 






  delete(id: number) {
    console.log(id);
     this.dashboardService.delete(id).subscribe(val => { console.log(val)
    this.dataSource = val;
    this.toastr.success('', 'one record deleted successful', {timeOut: 1000});
    },
    err => {
      this.toastr.error(err, 'try once');
      console.log(err);
    });

  }
  
  editData(id, obj) {
    this.dashboardService.edit(id, obj).subscribe(data => {
      localStorage.setItem('singleRecord', JSON.stringify(data));
      this.router.navigateByUrl('/dashboard/editData');
    },
    err => {
      console.log(err);
    });
  }
  
  addData() {
    this.router.navigateByUrl('/dashboard/addData');
  }
  
}
