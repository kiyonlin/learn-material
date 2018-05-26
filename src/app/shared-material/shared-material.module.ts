import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
  MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    FormsModule, MatAutocompleteModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
