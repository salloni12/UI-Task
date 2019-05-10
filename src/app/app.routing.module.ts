import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AddDataComponent } from "./dashboard/add-data/add-data.component";
import { EditDataComponent } from "./dashboard/edit-data/edit-data.component";
import { DashPanelComponent } from "./dashboard/dash-panel/dash-panel.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'dashPanel', component: DashPanelComponent },
      { path: 'addData', component: AddDataComponent },
      { path: 'editData', component: EditDataComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }