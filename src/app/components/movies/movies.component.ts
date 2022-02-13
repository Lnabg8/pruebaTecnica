import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service.';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  movies:any = [];

  constructor( private moviesService:MoviesService, 
               private router:Router ) { }

  ngOnInit(): void {
  /**
   * Recupera el catálogo de películas
   */
    this.moviesService.getMovies()
      .subscribe( data => {
      this.movies = data;
    })
  }

  /**
   * Recupera la película según el id
   * @param {number} id
   */
  movieDetails(id:number) {
    this.moviesService.getMovieId(id);
    this.router.navigate(['/movie', id]);
  }

  
}
