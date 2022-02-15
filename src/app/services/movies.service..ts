
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

  /**
   * Servicio que añade una película al catálogo 
   */
  newMovie(form: any){
    return this.http.post('http://localhost:3002/movies', form);
  }



  /**
   * Servicio que busca una película en el catálogo
   * @param {string} buscador
   * @param movies
   */
  buscarMovie(buscador: string, movies: any) {
    let movArr = [];
    buscador = buscador.toLocaleLowerCase();
    
    for (let movie of movies) {
      let title = movie.title.toLocaleLowerCase();
      if (title.indexOf(buscador) >= 0) {
        movArr.push(movie);
      }
    }
    return movArr;
  }

}
