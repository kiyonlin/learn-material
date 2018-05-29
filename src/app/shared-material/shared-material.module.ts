import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
  MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule,
  MatDatepickerModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatSelectModule, MAT_LABEL_GLOBAL_OPTIONS, MatCheckboxModule,
  MatRadioModule, MatSlideToggleModule, MatSliderModule, MatGridListModule, MatCardModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatDialogModule, MatChipsModule, MatTooltipModule, MatSnackBarModule, MatExpansionModule,
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { A11yModule } from '@angular/cdk/a11y';

export const CN_FORMATS = {
  parse: {
    dateInput: 'YYYY/MM/DD'
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11yLabel: 'YYYY MMM'
  }
};

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatMenuModule, MatStepperModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    FormsModule, MatAutocompleteModule, MatDatepickerModule, MatMomentDateModule, MatSelectModule, MatCheckboxModule,
    MatRadioModule, MatSlideToggleModule, MatSliderModule, MatGridListModule, MatCardModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatDialogModule, MatChipsModule, MatTooltipModule, MatSnackBarModule, MatExpansionModule,
    MatTabsModule, MatTableModule, MatSortModule, MatPaginatorModule, A11yModule
  ],
  declarations: [],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    { provide: MAT_DATE_FORMATS, useValue: CN_FORMATS },
    // { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ]
})
export class SharedMaterialModule { }
