import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {

  listaArticulos:Articulo[] = [];

  constructor() { 
    let art1:Articulo = {
      id: 1, 
      imagen: "",
      nombre: "Zapato",
      descripcion: "wleblbwergbñpwibeg",
      color: "marrón",
      talla: 40,
      precioOriginal: 39.99,
      rebajado: false,
      precioRebajado: 39.99
    }
    this.listaArticulos.push(art1);
  }

  ngOnInit(): void {
  }

}
