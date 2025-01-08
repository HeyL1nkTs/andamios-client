import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-conten',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './app-footer-conten.component.html',
  styleUrl: './app-footer-conten.component.css'
})
export class FooterLandingComponent {

  // constructor(private router:Router){}

  // goToForm(){
  //   this.router.navigate(['unete-al-equipo'])
  // }

}
