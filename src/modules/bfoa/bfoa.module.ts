import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MatCardModule} from '@angular/material';

import { MovieService } from './services/movie.service';
import { BfoaService } from './services/bfoa.service';
import { BfoaRoutingModule } from './bfoa-routing.module';

import { SanitizePipe } from '../app/pipes/sanitize.pipe';

import { BfoaListComponent } from './components/bfoa-list/bfoa-list.component';
import { BfoaDetailComponent } from './components/bfoa-detail/bfoa-detail.component'


@NgModule({
  declarations: [
    BfoaListComponent,
    BfoaDetailComponent,
    SanitizePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    BfoaRoutingModule
  ],
  providers: [
    BfoaService,
    MovieService
  ]
})
export class BfoaModule { }
