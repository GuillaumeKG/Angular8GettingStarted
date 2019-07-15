import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-bfoa-detail',
  templateUrl: './bfoa-detail.component.html',
  styleUrls: ['./bfoa-detail.component.scss']
})
export class BfoaDetailComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService ) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieService.getMovieById(+params.get('bfoaId'))
        .subscribe(
          movie => {this.movie = movie as Movie;},
          error => console.error('Error: ' + error),
          () => console.log('Completed!')
        );
    });
  }
}
