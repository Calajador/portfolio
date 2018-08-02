import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Productos [] = [];

  constructor( private http: HttpClient) {

    this.cargarProductos();
  }

  cargarProductos() {

    this.http.get('https://portfolio-81e17.firebaseio.com/productos_idx.json')
    .subscribe( (res: Productos[]) => {
      this.productos = res;
      console.log(res);
        this.cargando = false;
    });

  }

}
