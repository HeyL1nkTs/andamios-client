import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-conten-navbar',
  standalone: true,
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './conten-navbar.component.html',
  styleUrl: './conten-navbar.component.css'
})
export class ContenNavbarComponent {

  mainUrl = '/conten/';

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

  constructor() {}
}
