import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MobileService } from '../../../mobile.service';

@Component({
  selector: 'app-conten-navbar',
  standalone: true,
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './conten-navbar.component.html',
  styleUrl: './conten-navbar.component.css'
})
export class ContenNavbarComponent {

  mainUrl = '/conten/';
  icon:string = 'menu'

  configCategories = [
    {
      title: 'NOSOTROS',
      hasSections: false,
      link: '/conten',
      isDefault: true,
      isActive: true
    },
    {
      title: 'MANUFACTURA',
      hasSections: true,
      link: '/conten/manufactura',
      isActive: true,
      sections: [
        {
          title: 'Corte Laser para Tubo',
          link: 'corte-laser-para-tubo'
        },
        {
          title: 'Corte Laser Placa y Lamina',
          link: 'corte-laser-placa-y-lamina'
        },
        {
          title: 'Robot de Soldadura',
          link: 'robot-de-soldadura'
        }
      ]
    },
    {
      title: 'DISEÑO E INGENIERÍA',
      hasSections: false,
      isActive: true,
      link: this.mainUrl + 'ingenieria'
    },
    {
      title: 'PRODUCTOS',
      hasSections: false,
      isActive: true,
      link: this.mainUrl + 'productos'
    },
    {
      title: 'NUESTRAS CERTIFICACIONES',
      hasSections: false,
      isActive: true,
      link: this.mainUrl + 'certificaciones'
    },
    {
      title: 'OPC1',
      hasSections: false,
      isActive: false,
      link: this.mainUrl + 'opc1'
    },
    {
      title: 'OPC2 NUESTRAS CERTIFICACIONES',
      hasSections: false,
      isActive: false,
      link: this.mainUrl + 'opc1'
    },
    {
      title: 'OPC2 NOMBRE LARGO',
      hasSections: false,
      isActive: false,
      link: this.mainUrl + 'opc1'
    }
  ];

  isMobile: boolean;
  isTablet: boolean;

  constructor(private mobile: MobileService) {}

  ngOnInit() {
    this.mobile.getWidth().subscribe(width => {
      this.isMobile = width < 768;
      this.isTablet = width >= 768 && width < 1279;
      console.log('isMobile', this.isMobile);
      console.log('isTablet', this.isTablet);
    });
  }

  toggleIcon(){
    if (this.icon == 'close') {
      this.icon = 'menu'
    } else if (this.icon == 'menu') {
      this.icon = 'close'
    }

    document.getElementById('responsive-menu').classList.toggle('openMenu')
  }
}
