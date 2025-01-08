import { afterRender, Component } from '@angular/core';
// import { AndamiosService } from '../../andamios.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navbar-conten',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './app-navbar-conten.component.html',
  styleUrl: './app-navbar-conten.component.css'
})
export class NavbarLandingComponent {

  // navbar:any
  // icon:string = 'menu'

  // constructor(private andamiosService:AndamiosService) {
  //   this.andamiosService.obtenerNavbar().subscribe((res:any) => {
  //     this.navbar = res
  //   })

  // }

  // ngAfterViewInit(){
  //   this.icon = 'menu'
    
  // }

  // toggleIcon(){
  //   if (this.icon == 'close') {
  //     this.icon = 'menu'
  //   } else if (this.icon == 'menu') {
  //     this.icon = 'close'
  //   }

  //   document.getElementById('responsive-menu').classList.toggle('openMenu')
  // }


}
