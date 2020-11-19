import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

class Articulo{
    id:number;
    imagen:String;
    nombre:String;
    descripcion:String;
    color:String;
    talla:number;
    precioOriginal:number;
    rebajado:boolean;
    precioRebajado:number;
    constructor(id:number, imagen:String, nombre:String, descripcion:String, color:String, talla:number, precioOriginal:number, rebajado:boolean, precioRebajado:number){
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.color = color;
        this.talla = talla;
        this.precioOriginal = precioOriginal;
        this.rebajado = rebajado;
        this.precioRebajado = precioRebajado;
    }
}

export{Articulo}