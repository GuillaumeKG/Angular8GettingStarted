import { Injectable } from '@angular/core';
import { Movie, MovieSearchResult } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  movies: Movie[]
  code: string = "41e33d53"
  baseUrlDataSource: string = "https://www.omdbapi.com/?apikey=" + this.code + "&"

  constructor(private http: HttpClient) {
    
    console.log('MovieService constructor')
   }

  public getMovies():Observable<MovieSearchResult>{
    console.log(this.baseUrlDataSource + 's=star')
    return this.http.get<MovieSearchResult>(this.baseUrlDataSource + 's=star')
  }
  
  public getMovieById(id:number){
    return this.http.get(this.baseUrlDataSource +'i=' + id)
  }

  searchMovieByTitle(title: string){
    return this.http.get(this.baseUrlDataSource + 's=' + title)
  }
}
