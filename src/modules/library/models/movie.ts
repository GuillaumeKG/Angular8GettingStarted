export class Movie {
    imdbID: number;
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
}

export class MovieSearchResult {
    Search: Movie[]
  }