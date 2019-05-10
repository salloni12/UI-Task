import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DashboardService } from "../dashboard.service";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
  providers: [DashboardService]
})
export class AddDataComponent implements OnInit {

  constructor(private fb:FormBuilder,private dashboardService:DashboardService,private router:Router,
    private toastr: ToastrService) { }
  addData = {
  };

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,  Validators.minLength(5),
        Validators.maxLength(90)]],
      number: ['', [Validators.required]],
      DOB : ['', [Validators.required]],
      address : ['', [Validators.required]],
      gender : ['', [Validators.required]]
    });
  }
  Add() {
    console.log('in componet of add')
    this.dashboardService.add(this.addForm.value).subscribe(data => {
      console.log(data);
      this.toastr.success('Added successful');
      this.router.navigateByUrl('/dashboard/dashPanel');
    }, (err) => {
      console.log(err);
      this.toastr.error('', 'failed', {timeOut: 2000});
    });


  }

}
