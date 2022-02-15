import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MoviesService } from 'src/app/services/movies.service.';

@Component({
  selector: 'app-modal-new-movie',
  templateUrl: './modal-new-movie.component.html'
})
export class ModalNewMovieComponent {
  
  constructor( public activeModal: NgbActiveModal,
               private moviesService: MoviesService,
               private router: Router) { }


  /**
   * Añade una nueva película al catálogo
   * @param {NgForm} formNew
   */
  newMovie(formNew: NgForm) {
    formNew.value.genre = formNew.value.genre.split(',');
    formNew.value.actors = formNew.value.actors.split(',');
    //Se sustituye la portada por una 'dummyimage'
    formNew.value.poster = 'https://dummyimage.com/verticalrectangle';
    this.moviesService.newMovie(formNew.value)
      .subscribe(data => {
        this.activeModal.close();
        this.router.navigate(['/movies']);
      });
    
  }
}
