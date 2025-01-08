import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarLandingComponent } from './componentes/navbar-andamios/app-navbar-conten.component';
import { FooterLandingComponent } from './componentes/footer/app-footer-conten.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, NavbarLandingComponent, FooterLandingComponent],
  templateUrl: './conten.component.html',
  styleUrl: './conten.component.css'
})
export class LandingComponent {
  
}
