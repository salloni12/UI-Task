import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatSidenavModule,
  MatSidenavContent,MatSidenav,MatDatepickerModule,MatStepperModule, MatNativeDateModule,
  MatCheckboxModule,MatSortModule,MatExpansionModule,MatGridListModule,MatPaginatorModule,
  MatOptionModule,MatSelectModule,MatChipsModule
} from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
 import { ToastrModule } from 'ngx-toastr';


import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatSortModule,
  NgxSpinnerModule,
  ToastrModule.forRoot({timeOut: 5000, enableHtml :true}),
  MatExpansionModule,
  MatGridListModule,
  MatPaginatorModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOptionModule,
  MatSelectModule,
  MatChipsModule

  ],
  exports: [
  CommonModule,
   MatToolbarModule,
   MatButtonModule,
   MatCardModule,
   MatInputModule,
   MatDialogModule,
   MatTableModule,
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatFormFieldModule,
   MatSidenavModule,
   MatCheckboxModule,
   MatSortModule,
   NgxSpinnerModule,
   MatExpansionModule,
   MatGridListModule,
   MatPaginatorModule,
   MatStepperModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatOptionModule,
   MatSelectModule,
   MatChipsModule

   ],
})
export class CustomMaterialModule { 
}