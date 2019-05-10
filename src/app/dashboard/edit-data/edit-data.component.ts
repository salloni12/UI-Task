import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../dashboard.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css'],
  providers:[DashboardService]
})
export class EditDataComponent implements OnInit {

  editData = { };
  updateId;
  editForm: FormGroup;
  data: any;

  constructor(private router:Router,private dashboardService:DashboardService,private fb:FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: [''],
      email: ['']
    });
 
    this.data = JSON.parse(localStorage.getItem('singleRecord'));
    console.log(this.data);
    this.updateId = this.data._id;
    this.editForm.patchValue({
      name: this.data.name,
      email: this.data.email,
      number: this.data.number,
      address: this.data.address,
      DOB: this.data.DOB,
      gender: this.data.gender
      
    });
  }
  edit() {
    this.dashboardService.edit(this.updateId, this.editForm.value).subscribe(data => {
      this.router.navigateByUrl('/dashboard');
      this.toastr.success('', 'edit successful', {timeOut: 1000});
    }, (err) => {
      console.log(err);
    });

  }

}
