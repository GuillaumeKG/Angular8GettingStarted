import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule} from '@angular/material';
import { SanitizePipe } from './pipes/sanitize.pipe';
import { HighlightDirective } from './directives/HighlightDirective';


@NgModule({
  declarations: [
    SanitizePipe,
    HighlightDirective,
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
    SanitizePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
