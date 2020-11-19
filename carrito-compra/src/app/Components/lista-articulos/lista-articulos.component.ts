import { Component, OnInit, Output } from '@angular/core';
import { Articulo } from '../../../models/articulo'
@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.scss']
})
export class ListaArticulosComponent implements OnInit {

  listaArticulos:Articulo[];

  constructor() { 
    let art1:Articulo = new Articulo(1, "../../../assets/img/zapato.jpg", "Zapato", "Zapatos negros formales", "Negro", "40", 39.99, false, 39.99, 1, 39.99);
    art1.total = art1.calcularTotal();

    let art2:Articulo = new Articulo(2, "../../../assets/img/sudadera.jpg", "Sudadera", "Una sudadera gris con capucha", "Gris", "XL", 29.99, true, 25.99, 1, 29.99);
    art2.total = art2.calcularTotal();

    this.listaArticulos=[];
    this.listaArticulos.push(art1);
    this.listaArticulos.push(art2);
  }

  ngOnInit(): void {
  }

}
