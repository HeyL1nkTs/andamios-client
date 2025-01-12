import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, NgZone, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent, debounceTime, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private widthSubject = new BehaviorSubject<number>(0); // Default para SSR
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private ngZone: NgZone) {
    this.isBrowser = isPlatformBrowser(platformId); // Verifica si se está ejecutando en el navegador

    if (this.isBrowser) {
      // Establece el ancho inicial del navegador
      this.widthSubject.next(window.innerWidth);

      // Escucha cambios de tamaño solo en el navegador
      this.ngZone.runOutsideAngular(() => {
        fromEvent(window, 'resize')
          .pipe(debounceTime(100)) // Evita emisiones frecuentes
          .subscribe(() => {
            const width = window.innerWidth;
            this.ngZone.run(() => this.widthSubject.next(width));
          });
      });
    }
  }

  /**
 * @description Obtiene el ancho actual del viewport como un observable.
 */
  getWidth(): Observable<number> {
    return this.widthSubject.asObservable();
  }

  /**
   * @description Obtiene el ancho actual del viewport como un valor inmediato.
   */
  getCurrentWidth(): number {
    return this.widthSubject.value;
  }
}
