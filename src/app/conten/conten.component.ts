import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAndamiosComponent } from '../andamios/componentes/navbar-andamios/navbar-andamios.component';
import { ContenNavbarComponent } from "./html/conten-navbar/conten-navbar.component";

@Component({
  selector: 'app-conten',
  standalone: true,
  imports: [RouterOutlet, NavbarAndamiosComponent, ContenNavbarComponent],
  templateUrl: './conten.component.html',
  styleUrl: './conten.component.css'
})
export class ContenComponent {

}
