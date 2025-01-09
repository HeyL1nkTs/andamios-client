import { Component } from '@angular/core';
import { HoverableComponent } from '../../html/hoverable/hoverable.component';
import { fadeInAnimation } from '../../../fadeIn';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [HoverableComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  animations: [fadeInAnimation]
})
export class ProductosComponent {

  items: Array<{
    id: number,
    title: string,
    description: any,
    img: string,
    url: string
  }> = [
    {
      id: 1,
      title: 'Rack Automotriz',
      description: 'Fabricados en Acero Estructural <br><br> Nuestros Racks permiten tener diferentes configuraciones que permiten un cuidado seguro de las autopartes y materiales durante su traslado y almacenamiento, como lo son los Racks Automotrices para carga y descarga robótica.<br><br>Nuestra obsesión por la excelencia se refleja en la elección de los materiales de primera calidad que utilizamos para fabricar cada rack.<br><br>Gracias a nuestro personal capacitado y nuestra maquinaria de vanguardia, logramos cálculos precisos para el trabajo eficaz del rack en la línea de producción y ensamble. Mediante procesos automatizados logramos fabricar en serie cualquier volumen de racks.',
      img: 'assets/imagenes/productos/r1.jpg',
      url: '/productos/rack-automotriz'
    },
    {
      id: 2,
      title: 'Racks de Toma Robótica',
      description: 'Fabricados en Acero Estructural <br><br> Nuestros Racks permiten tener diferentes configuraciones que permiten un cuidado seguro de las autopartes y materiales durante su traslado y almacenamiento, como lo son los Racks Automotrices para carga y descarga robótica.<br><br>Nuestra obsesión por la excelencia se refleja en la elección de los materiales de primera calidad que utilizamos para fabricar cada rack.<br><br>Gracias a nuestro personal capacitado y nuestra maquinaria de vanguardia, logramos cálculos precisos para el trabajo eficaz del rack en la línea de producción y ensamble. Mediante procesos automatizados logramos fabricar en serie cualquier volumen de racks.',
      img: 'assets/imagenes/productos/r2.jpg',
      url: '/productos/racks-de-toma-robotica'
    },
    {
      id: 3,
      title: 'Racks de Ensamble',
      description: 'Fabricados en Acero Estructural <br><br> Nuestros Racks permiten tener diferentes configuraciones que permiten un cuidado seguro de las autopartes y materiales durante su traslado y almacenamiento, como lo son los Racks Automotrices para carga y descarga robótica.<br><br>Nuestra obsesión por la excelencia se refleja en la elección de los materiales de primera calidad que utilizamos para fabricar cada rack.<br><br>Gracias a nuestro personal capacitado y nuestra maquinaria de vanguardia, logramos cálculos precisos para el trabajo eficaz del rack en la línea de producción y ensamble. Mediante procesos automatizados logramos fabricar en serie cualquier volumen de racks.',
      img: 'assets/imagenes/productos/r3.jpg',
      url: '/productos/racks-de-ensamble'
    }
  ]

  constructor(private sanitizer: DomSanitizer) {
    this.items.forEach(item => {
      item.description = this.sanitizer.bypassSecurityTrustHtml(item.description);
    });
  }

}
