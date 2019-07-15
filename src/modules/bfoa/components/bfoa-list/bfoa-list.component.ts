import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-bfoa-list',
  templateUrl: './bfoa-list.component.html',
  styleUrls: ['./bfoa-list.component.scss']
})
export class BfoaListComponent implements OnInit {

  movies: Movie[]

  


  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: movies => {this.movies = movies.Search as Movie[]; console.log(this.movies)},
      error: err => console.error('movieService.getMovies() got an error: ' + err),
      complete: () => console.log('movieService.getMovies() got a complete notification'),
    })
  }

}
