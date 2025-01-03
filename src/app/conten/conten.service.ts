import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Archivo } from './models/archivo';
// import { Comunicado } from './models/comunicado';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  private URL = "http://localhost:3000/api/"

  constructor(private http:HttpClient) { }

  
  

  enviarFormulario(formData:FormData){
    return this.http.post(`${this.URL}crearSolicitud`, formData)
  }

}
