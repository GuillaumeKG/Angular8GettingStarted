import { NgModule } from '@angular/core';

import { BfoaService } from './services/bfoa.service';
import { BfoaRoutingModule } from './bfoa-routing.module';

import { BfoaListComponent } from './components/bfoa-list/bfoa-list.component';
import { BfoaDetailComponent } from './components/bfoa-detail/bfoa-detail.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BfoaListComponent,
    BfoaDetailComponent,
  ],
  imports: [
    SharedModule,
    BfoaRoutingModule,
  ],
  providers: [
    BfoaService
  ]
})
export class BfoaModule { }
