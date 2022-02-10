import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';


const ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'movies', component: MoviesComponent },
  {path: 'about', component: AboutComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
