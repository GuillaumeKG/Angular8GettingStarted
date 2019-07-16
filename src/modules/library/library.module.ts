import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

import { MovieService } from './services/movie.service';

import { LibraryRoutingModule } from './library-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LibraryHomeComponent } from './components/library-home/library-home.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';

@NgModule({
  declarations: [
    MovieListComponent, 
    MovieDetailComponent, LibraryHomeComponent, LibraryCardComponent],
  imports: [
    SharedModule,
    LibraryRoutingModule,
  ],
  providers: [
    MovieService
  ]
})
export class LibraryModule { }
