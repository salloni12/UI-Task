import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AddDataComponent } from './dashboard/add-data/add-data.component';
import { EditDataComponent } from './dashboard/edit-data/edit-data.component';
import { DashPanelComponent } from './dashboard/dash-panel/dash-panel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddDataComponent,
    EditDataComponent,
    DashPanelComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule, BrowserAnimationsModule, CustomMaterialModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    LayoutModule, MatToolbarModule, MatButtonModule, ChartsModule, MatSidenavModule, MatIconModule, MatListModule, NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
