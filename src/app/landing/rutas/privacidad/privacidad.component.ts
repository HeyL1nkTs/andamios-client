import { afterRender, Component } from '@angular/core';
import { SeoService } from '../../../seo.service';
import { fadeInAnimation } from '../../../fadeIn';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports:[],
  templateUrl: './privacidad.component.html',
  styleUrls: ['./privacidad.component.css'],
  animations: [fadeInAnimation]
})
export class PrivacidadComponent {

  constructor(private seo:SeoService){
    afterRender(()=>{
      window.scrollTo(0,0)
    })
    this.seo.setTitle('Aviso de privacidad')
    this.seo.setKeywords([
      'Politicas de privacidad',
      'Conoce las politicas de privacidad de Andamios Atlas',
      'Politicas de privacidad'
    ])
  }

}
