import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { BfoaListComponent } from './components/bfoa-list/bfoa-list.component'
import { BfoaDetailComponent } from './components/bfoa-detail/bfoa-detail.component'

const routes: Routes = [
  {path: '', component: BfoaListComponent},
  {path: ':id', component: BfoaDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class BfoaRoutingModule { }
