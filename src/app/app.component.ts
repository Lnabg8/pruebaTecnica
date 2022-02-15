import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviesApp';

  constructor(translate: TranslateService) {
  
  //Declaramos idioma españosl por defecto
  translate.setDefaultLang('es');

  translate.use('es');
  }
}
