import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[]
  code: string = "41e33d53"
  baseUrlDataSource: string = "https://www.omdbapi.com/?apikey=" + this.code + "&"

  constructor(private http: HttpClient) { }

  public getMovies(){
    console.log(this.baseUrlDataSource + 's=star')
    return this.http.get(this.baseUrlDataSource + 's=star')
  }
  
  public getMovieById(id:number){
    return this.http.get(this.baseUrlDataSource +'i=' + id)
  }

  searchMovieByTitle(title: string){
    return this.http.get(this.baseUrlDataSource + 's=' + title)
  }

}
