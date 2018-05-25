import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
    MatListModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
