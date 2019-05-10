import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService  } from './login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
 import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private loginService: LoginService,private fb:FormBuilder, private spinner: NgxSpinnerService,
   private toastr: ToastrService ) { }
   public user;
   
  // loginData = {
  // };

  // creating the formgrp for validation
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,  Validators.minLength(2),
        Validators.maxLength(90)]],
      password: ['', [Validators.required]]
    });
  }
  login()  {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(data => {
      // if (data.length > 0) {
        this.toastr.success('login successful');
       
        this.router.navigateByUrl('/dashboard/dashPanel');
  
     // }
    }, (err) => {
   this.toastr.error('', 'login failed');
      console.log(err);
  
    });

  }
  }


