import { afterRender, Component } from '@angular/core';
import { fadeInAnimation } from '../../../fadeIn';
import { SeoService } from '../../../seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  animations: [fadeInAnimation]
})
export class ProductsComponent {

  constructor(private seo: SeoService, private router:Router) {
    afterRender(() => {
      window.scrollTo(0, 0);
      this.seo.setTitle("test");
      this.seo.setKeywords([
        "Andamios Atlas test",
        "Andamios Atlás, el mayor líder en renta y venta de andamios en el mercado.",
        "inicio"
      ])
    })
  }

  irA(direccion:string){
    this.router.navigate([direccion])
  }

}
