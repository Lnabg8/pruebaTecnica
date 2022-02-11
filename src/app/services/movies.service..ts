
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  constructor( private http: HttpClient ) {

  }


  getMovies(){
    return this.http.get('http://localhost:3000/movies');
  }

  getHeroe( idx: string ){
    //return this.movies[idx];
  }





}


export interface Movie{
  title: string;
  poster: string;
  genre: string;
  year: string;
  duration: string;
  id?: number;
  imdbRating: number;
  actors: string;
};
