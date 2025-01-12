import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { fadeInAnimation } from '../../../fadeIn';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import _ from 'lodash';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { PetitionsService } from '../../../petitions.service';
// register Swiper custom elements
register();

const MANUFACTURA_SECTION_ROUTE = 'manufactura/seccion';
const MANUFACTURA_SUBSECTION_ROUTE = 'manufactura/subseccion';

@Component({
  selector: 'app-manufctura',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './manufctura.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './manufctura.component.css',
  animations: [fadeInAnimation]
})
export class ManufcturaComponent {

  //ITEMS//
  secciones = [
    {
      id: 1,
      name: 'Corte Laser para Tubo',
      tipo: 1,
      subSecciones: [
        { id: 1, name: 'Item 1', img: 'assets/imagenes/manufactura/CorteLaser/corte1.jpeg' },
        { id: 2, name: 'MEDICIÓN DE RACKS POR MEDIO DE SCANNER', img: 'assets/imagenes/manufactura/CorteLaser/corte2.jpeg' },
        { id: 3, name: 'Item 3', img: 'assets/imagenes/manufactura/CorteLaser/corte3.jpeg' },

      ]
    },
    {
      id: 2,
      name: 'Corte Laser Placa y Lamina',
      subSecciones: [
        { id: 1, name: 'MEDICIÓN DE RACKS POR MEDIO DE SCANNER', img: 'assets/imagenes/manufactura/CortePlaca/placa1.jpg' },
        { id: 2, name: 'Item 2', img: 'assets/imagenes/manufactura/CortePlaca/placa2.jpg' },
        { id: 3, name: 'Item 3', img: 'assets/imagenes/manufactura/CortePlaca/placa3.jpg' },
        { id: 4, name: 'Item 4', img: 'assets/imagenes/manufactura/CortePlaca/placa4.jpg' },
        { id: 5, name: 'MEDICIÓN DE RACKS POR MEDIO DE SCANNER', img: 'assets/imagenes/manufactura/CortePlaca/placa5.jpg' }
      ]
    },
    {
      id: 3,
      name: 'Robot de Soldadura',
      subSecciones: [
        { id: 1, name: 'Item 1', img: 'assets/imagenes/manufactura/RobotSoldadura/robot1.jpg' },
        { id: 2, name: 'Item 2', img: 'assets/imagenes/manufactura/RobotSoldadura/robot2.jpg' },
        { id: 3, name: 'MEDICIÓN DE RACKS POR MEDIO DE SCANNER', img: 'assets/imagenes/manufactura/RobotSoldadura/robot3.jpg' }
      ]
    }
  ];

  subSeccion = {
    id: 1,
    name: 'Corte Laser para Tubo',
    imgs: [
      { id: 1, img: 'assets/imagenes/manufactura/CorteLaser/corte1.jpeg' },
      { id: 2, img: 'assets/imagenes/manufactura/CorteLaser/corte2.jpeg' },
      { id: 3, img: 'assets/imagenes/manufactura/CorteLaser/corte3.jpeg' }
    ],
    description: "Nuestras máquinas de corte láser para tubo nos permiten ofrecer cortes con una gran precisión, cortar geometrías complejas en tubos redondos, cuadrado, rectangular y ovales con tiempos de proceso muy rápidos, hasta 5” de diámetro. <br> • Podemos crear cualquier característica de corte o geometría en los tubos. <br> • Tubos redondos, cuadrado, rectangular y ovales. <br> • Agujeros, ranuras, chaflanes, filetes. <br> • Corte pliegue para posteriormente doblar un tubo. <br> • Diferentes tipos de materiales (acero al carbón, acero inoxidable, acero galvanizado, aluminio, cobre, latón). <br> • Fabricación de piezas que tienen diferentes procesos en una sola máquina. <br> • Mejor precisión. <br> • Mejor calidad de corte. <br> • Mejores tiempos de proceso."
  }

  seccion = {
    id: 2,
    name: 'Corte Laser Placa y Lamina',
    subSecciones: [
      { id: 1, name: 'MEDICIÓN DE RACKS POR MEDIO DE SCANNER', img: 'assets/imagenes/manufactura/CortePlaca/placa1.jpg' },
      { id: 2, name: 'Item 2', img: 'assets/imagenes/manufactura/CortePlaca/placa2.jpg' },
      { id: 3, name: 'Item 3', img: 'assets/imagenes/manufactura/CortePlaca/placa3.jpg' },
      { id: 4, name: 'Item 4', img: 'assets/imagenes/manufactura/CortePlaca/placa4.jpg' },
      { id: 5, name: 'MEDICIÓN DE RACKS POR MEDIO DE SCANNER', img: 'assets/imagenes/manufactura/CortePlaca/placa5.jpg' }
    ]
  }

  subSeccionUrl: string;
  isSubSection: boolean = false;
  isSection: boolean = false;
  safeDescription;

  //CAROUSEL//
  slidesPer: number = 3;
  loop: boolean = true;
  speed: number = 1000;
  brakePoints: any = {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  width: string = "80%";
  height: string = "auto";
  imgWidth: string = "80%";
  imgHeight: string = "300px";
  mainUrl: string = '/';
  destinyUrl: string = '/';
  autoplay: any = {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true
  }

  constructor(private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer, private petitionsService: PetitionsService) {
    this.route.paramMap.subscribe(params => {
      this.isSection = false;
      this.isSubSection = false;
      const subsectionName = params.get('name');
      const currentRoute = this.route.snapshot.url.map(segment => segment.path).join('/');
      const name = this.petitionsService.formatToSpaces(subsectionName);

      if (currentRoute.includes(MANUFACTURA_SUBSECTION_ROUTE) && !_.isEmpty(subsectionName)) {
        this.isSubSection = true;
        this.isSection = false;
        this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(this.subSeccion.description);
      } else if (currentRoute.includes(MANUFACTURA_SECTION_ROUTE) && !_.isEmpty(subsectionName)) {
        this.isSection = true;
        this.isSubSection = false;
      } else {
        this.isSubSection = false;
        this.isSection = false;
      }
    });
  }

  goTo(seccion) {
    seccion = this.petitionsService.formatToDashes(seccion);
    if (_.isEmpty(seccion)) {
      this.router.navigate(['/conten/manufactura']);
    } else {
      this.router.navigate([`/conten/manufactura/subseccion/${seccion}`]);
    }
  }

  nextView(seccionId) {
    const carousel = document.querySelector(`#carousel-${seccionId}`) as any; // Selecciona el carrusel por ID
    if (carousel?.swiper) {
      carousel.swiper.slideNext(); // Mueve al siguiente slide
    }
  }

  prevView(seccionId) {
    const carousel = document.querySelector(`#carousel-${seccionId}`) as any; // Selecciona el carrusel por ID
    if (carousel?.swiper) {
      carousel.swiper.slidePrev(); // Mueve al slide anterior
    }
  }

}
