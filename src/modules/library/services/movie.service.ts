import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';

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
