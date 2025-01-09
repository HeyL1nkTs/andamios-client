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

  configCategories = [
    {
      title: 'NOSOTROS',
      hasSections: false,
      link: '/conten',
      isDefault: true
    },
    {
      title: 'MANUFACTURA',
      hasSections: true,
      link: '/conten/manufactura', //Para este link la const es: /conten
      sections: [
        {
          title: 'Corte',
          link: '/conten/manufactura/corte' //Para este link la const es el nombre de la sección
        },
        {
          title: 'Doblado',
          link: '/conten/manufactura/doblado'
        },
        {
          title: 'Soldadura',
          link: '/conten/manufactura/soldadura'
        },
        {
          title: 'Pintura',
          link: '/conten/manufactura/pintura'
        }
      ]
    },
    {
      title: 'DISEÑO E INGENIERÍA',
      hasSections: false,
      link: '/conten/ingenieria'
    },
    {
      title: 'PRODUCTOS',
      hasSections: true,
      link: '/conten/productos',
      sections: [
        {
          title: 'Cajas',
          link: '/conten/productos/cajas'
        },
        {
          title: 'Gabinetes',
          link: '/conten/productos/gabinetes'
        },
        {
          title: 'Racks',
          link: '/conten/productos/racks'
        },
        {
          title: 'Paneles',
          link: '/conten/productos/paneles'
        },
        {
          title: 'Puertas',
          link: '/conten/productos/puertas'
        }
      ]
    },
    {
      title: 'NUESTRAS CERTIFICACIONES',
      hasSections: false,
      link: '/conten/certificaciones'
    },
    {
      title: 'OPC1',
      hasSections: false,
      link: '/conten/opc1'
    },
    {
      title: 'OPC2 NUESTRAS CERTIFICACIONES',
      hasSections: false,
      link: '/conten/opc1'
    },
    {
      title: 'OPC2 NOMBRE LARGO',
      hasSections: false,
      link: '/conten/opc1'
    }
  ];

  constructor() {}
}
