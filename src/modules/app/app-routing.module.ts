import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentComponent } from './components/authent/authent.component'

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: AuthentComponent},
  
  {path: 'bfoas', loadChildren: () => import('../bfoa/bfoa.module').then(m => m.BfoaModule)},
  {path: 'library', loadChildren: () => import('../library/library.module').then(m => m.LibraryModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
