
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  constructor( private http: HttpClient ) {

  }

  /**
   * Servicio que recupera todo el catálogo de películas
   */
  getMovies(){
    return this.http.get('http://localhost:3002/movies');
  }

  /**
   * Servicio que recupera la película según el id
   * @param {number} id
   */
  getMovieId( id: number ){
    return this.http.get(`http://localhost:3002/movies/${id}`);
  }

  /**
   * Servicio que recupera la película según el id
   * @param {number} id
   */
  deleteMovieId( id: number ){
    return this.http.delete(`http://localhost:3002/movies/${id}`);
  }

  /**
   * Servicio que recupera todo el catálogo de actores
   */
  getActors(){
    return this.http.get('http://localhost:3002/actors');
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
