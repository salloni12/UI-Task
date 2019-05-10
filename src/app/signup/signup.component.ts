import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from "./signup.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [SignupService]
})

export class SignupComponent implements OnInit {
  constructor(private router: Router,
    private signupService: SignupService, private fb: FormBuilder,
    private toastr: ToastrService) { }
  public user;

  registerData = {};
  registerForm: FormGroup;
 
  
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['' , [Validators.required]],
      gender: ['' , [Validators.required]],
      DOB : ['' ,[Validators.required]]
    });

  }


  signup() {
      this.signupService.register(this.registerForm.value).subscribe(data => {
        this.toastr.success(this.registerForm.value.name, 'SignUp successful', { timeOut: 1000 });
        this.router.navigateByUrl('/login');
      }, (err ) => {
        this.toastr.error('', 'signup failed', { timeOut: 1000 });
        console.log(err);
      });

  }

}
