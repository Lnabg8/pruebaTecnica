import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RatingModule } from 'ng-starrating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesService } from './services/movies.service.';
import { MovieComponent } from './components/movie/movie.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { SpinnerInterceptor } from './components/shared/interceptors/spinner.interceptor';
import { ModalNewMovieComponent } from './components/movies/modal-new-movie/modal-new-movie.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    AboutComponent,
    MovieComponent,
    SpinnerComponent,
    ModalNewMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RatingModule,
    NgbModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [MoviesService, {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
