import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service.';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  movies:any = [];

  constructor( private moviesService:MoviesService ) { }

  ngOnInit(): void {
    this.moviesService.getMovies()
    .subscribe( data => {
      this.movies = data;
    })
  }

  getCatalogue() {

  }
}
