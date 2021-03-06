import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/services/movies.service.';
import { Router } from '@angular/router';
import { ModalNewMovieComponent } from './modal-new-movie/modal-new-movie.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  movies:any = [];

  constructor( private moviesService:MoviesService, 
               private router:Router,
               private modalService: NgbModal,
               private translate: TranslateService, ) { }

  ngOnInit(): void {
    /**
     * Recupera el catálogo de películas
     */
    try {
        this.moviesService.getMovies()
          .subscribe( data => {
          this.movies = data;
        })
    } catch (err) {
        console.log(`Error en el servicio buscarMovie(): ${err}`);
    }
  
  }

  /**
   * Recupera la película según el id
   * @param {number} id
   */
  movieDetails(id:number) {
    try {
      this.moviesService.getMovieId(id);
    } catch (err) {
      console.log(`Error en el servicio movieDetails(): ${err}`);
    }
    this.router.navigate(['/movie', id]);
  }

 /**
   * Crear nueva película modal
   */
  showModalNewMovie() {
    const modalRef: NgbModalRef = this.modalService.open(ModalNewMovieComponent, {
        size: 'lg',
        windowClass: 'modal-qa-width',
        backdrop: 'static'
    });
    const modalInstance: ModalNewMovieComponent = modalRef.componentInstance;

  } 

  /**
   * Buscador de películas por nombre
   * @param {string} buscador
   */
  buscarMovie(buscador: string) {
    try {
      this.moviesService.getMovies()
        .subscribe( data => {
          this.movies = this.moviesService.buscarMovie(buscador, data);
      })
    //Se añade control de errores  mediente try/catch al no devolver el servicio errores controlados
    } catch (err) {
      console.log(`Error en el servicio buscarMovie(): ${err}`);
    }
  }
  


}
