import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../../models/articulo';

@Component({
  selector: 'app-articulos-component',
  templateUrl: './articulos-component.component.html',
  styleUrls: ['./articulos-component.component.scss']
})
export class ArticulosComponentComponent implements OnInit {

  @Input() articulo!:Articulo;

  constructor() { 

  }

  aumentar(){
    this.articulo.aumentarNum();
    this.articulo.total = this.articulo.calcularTotal();
  }

  reducir(){
    if(this.articulo.cantidad > 1){
      this.articulo.reducirNum();
      this.articulo.total = this.articulo.calcularTotal();
    }
  }

  ngOnInit(): void {
  }

}
