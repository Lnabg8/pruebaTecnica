import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from 'src/app/services/movies.service.';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [
  ]
})
export class MovieComponent {

  movie:any = {};
  actors:any;

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService,
               private router: Router ) {

  }

  ngOnInit(): void {
    /**
     * Recupera el catálogo de películas
     */
     this.actorsList();
     let act: any = [];
     this.activatedRoute.params.subscribe( params =>{
       this.moviesService.getMovieId(params['id']).
         subscribe(data => {
           this.movie = data;
            this.actors.forEach((element: any) => {
              this.movie.actors.indexOf(element.id) !== -1 ? act.push(` ${element.first_name} ${element.last_name}`) : '';
            });;
            this.movie.actors = act.length != 0 ? act : this.movie.actors;
         });
     });
  }

  /**
   * Recupera la lista de actores
   */
  async actorsList() {
    await this.moviesService.getActors()
      .subscribe(actors => {
        this.actors = actors;
      });
  }

  /**
   * Elimina la película seleccionada
   * @param {number} id
   */
  deleteMovie(id: number) {
    this.moviesService.deleteMovieId(id)
      .subscribe(data => {
        this.router.navigate(['/movies']);
      });
    
  }

}
