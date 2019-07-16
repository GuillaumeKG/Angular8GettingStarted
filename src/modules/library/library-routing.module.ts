import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailComponent } from './components/movie-detail/movie-detail.component'
import { MovieListComponent } from './components/movie-list/movie-list.component'
import { LibraryHomeComponent } from './components/library-home/library-home.component';

const routes: Routes = [
  {path: '', component: LibraryHomeComponent},
  {path: 'movie', component: MovieListComponent},
  {path: 'movie/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
