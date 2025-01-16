import { afterRender, Component } from '@angular/core';
import { fadeInAnimation } from '../../../fadeIn';
import { SeoService } from '../../../seo.service';

@Component({
  selector: 'app-anticorrupcion',
  standalone: true,
  imports: [],
  templateUrl: './anticorrupcion.component.html',
  styleUrls: ['./anticorrupcion.component.css'],
  animations: [fadeInAnimation]
})
export class AnticorrupcionComponent {

  constructor(private seo:SeoService) {
    afterRender(() => {
      window.scroll(0, 0);
    })
    this.seo.setTitle('Aviso de anticorrupción')
    this.seo.setKeywords([
      'Aviso de anticorrupción',
      'Conoce las politicas de anticorrupción de Andamios Atlas',
      'Aviso de anticorrupción'
    ])
  }

}
