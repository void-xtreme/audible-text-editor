import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ],
  declarations: []
})
export class AppMaterialModule { }
