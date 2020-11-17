import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

class Articulo{
    nombre:String;
    descripcion:String;
    color:String;
    talla:number;
    precioOriginal:number;
    rebajado:boolean;
    precioRebajado:number;
    constructor(nombre:String, descripcion:String, color:String, talla:number, precioOriginal:number, rebajado:boolean, precioRebajado:number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.color = color;
        this.talla = talla;
        this.precioOriginal = precioOriginal;
        this.rebajado = rebajado;
        this.precioRebajado = precioRebajado;
    }
}