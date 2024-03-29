import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDesc } from '../../interfaces/producto-desc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDesc;
  id: string;

  constructor( private route: ActivatedRoute,
              public _producS: ProductosService ) { }

  ngOnInit() {

    this.route.params
    .subscribe( parametros => {
        // console.log(parametros['id']);
        this._producS.getProducto(parametros['id'])
              .subscribe((producto: ProductoDesc) => {
                this.id = parametros['id'];
                this.producto = producto;
              });
    });
  }

}
