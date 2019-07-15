import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentComponent } from './components/authent/authent.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  {path: '', component: AuthentComponent},
  {path: 'home', component: AuthentComponent},
  
  {path: 'bfoas', loadChildren: () => import('../bfoa/bfoa.module').then(m => m.BfoaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
