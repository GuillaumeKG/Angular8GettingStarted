import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[]
  
  constructor(
    private movieService: MovieService
  ) {  }

  ngOnInit() {
    this.movieService.getMovies().subscribe({
      next: movies => {this.movies = movies.Search ; console.log(this.movies)},
      error: err => console.error('movieService.getMovies() got an error: ' + err),
      complete: () => console.log('movieService.getMovies() got a complete notification'),
    })

  }

  public onDelete(id: number){
    console.log(`Movie ${id} has been deleted`)  
    this.movies = this.movies.filter(movie => movie.imdbID != id)
  }
}

