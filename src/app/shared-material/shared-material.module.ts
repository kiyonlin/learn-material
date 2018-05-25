import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatRippleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatRippleModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
