import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (res: InfoPagina) => {
      this.cargada = true;
      this.info = res;
    });
  }

  private cargarEquipo() {
    this.http.get('https://portfolio-81e17.firebaseio.com/Equipo.json')
    .subscribe( (res: any) => {
      this.equipo = res;
    });
  }

}
