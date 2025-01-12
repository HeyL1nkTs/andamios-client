import { Component } from '@angular/core';
import { fadeAnimation, fadeInAnimation } from '../../../fadeIn';
import { MobileService } from '../../../mobile.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css',
  animations:[fadeAnimation, fadeInAnimation]
})
export class NosotrosComponent {

  isMobile: boolean;
  isTablet: boolean;

  constructor(private mobile: MobileService) { }

  ngOnInit() {
    this.mobile.getWidth().subscribe(width => {
      this.isMobile = width < 768;
      this.isTablet = width >= 768 && width < 1279;
    });
  }

  slides = [
    {
      img: 'assets/imagenes/cA.jpg', //base64 image
      imgResponsive: 'assets/imagenes/cA.jpg',
      title: 'Slide 1',
      description: 'Slide 1 description',
      button: true
    },
    {
      img: 'assets/imagenes/cB.jpg',
      imgResponsive: 'assets/imagenes/cB.jpg',
      title: 'Slide 2',
      description: 'Slide 2 description',
      button: true
    }
  ]

  plantas = [
    {
      img: 'assets/imagenes/planta1.jpg',
      size: '7,000 m2',
      location: 'Planta San Luis Potosí'
    },
    {
      img: 'assets/imagenes/planta2.jpg',
      size: '10,000 m2',
      location: 'Planta Tlanepantla de Baz'
    },
    {
      img: 'assets/imagenes/planta1.jpg',
      size: '7,000 m2',
      location: 'Planta San Luis Potosí'
    },
    {
      img: 'assets/imagenes/planta2.jpg',
      size: '10,000 m2',
      location: 'Planta Tlanepantla de Baz'
    }
  ]

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
