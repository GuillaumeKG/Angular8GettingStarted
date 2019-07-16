import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule} from '@angular/material';
import { SanitizePipe } from './pipes/sanitize.pipe';


@NgModule({
  declarations: [
    SanitizePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    HttpClientModule,

    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    HttpClientModule,

    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    SanitizePipe
  ]
})
export class SharedModule { }
