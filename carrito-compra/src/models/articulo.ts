import { NodeCompatibleEventEmitter } from "rxjs/internal/observable/fromEvent";

export class Articulo{
    _id:number;
    _imagen:string;
    _nombre:string;
    _descripcion:string;
    _color:string;
    _talla:string;
    _precioOriginal:number;
    _rebajado:boolean;
    _precioRebajado:number;
    _cantidad:number;
    _total: number;

    constructor(id:number, imagen:string, nombre:string, descripcion:string, color:string, talla:string, precioOriginal:number, rebajado:boolean, precioRebajado:number, cantidad: number, total:number){
        this._id = id;
        this._imagen = imagen;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._color = color;
        this._talla = talla;
        this._precioOriginal = precioOriginal;
        this._rebajado = rebajado;
        this._precioRebajado = precioRebajado;
        this._cantidad = cantidad;
        this._total = total;
    }

    get id(){
        return this._id;
    }

    set id(id:number){
        this.id = id;
    }

    get imagen(){
        return this._imagen;
    }

    set imagen(imagen:string){
        this._imagen=imagen;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre:string){
        this._nombre;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion:string){
        this._descripcion=descripcion;
    }

    get color(){
        return this._color;
    }

    set color(color:string){
        this._color = color;
    }

    get talla(){
        return this._talla;
    }

    set talla(talla:string){
        this._talla = talla;
    }

    get precioOriginal(){
        return this._precioOriginal;
    }

    set precioOriginal(precioOriginal:number){
        this._precioOriginal = precioOriginal;
    }

    get rebajado(){
        return this._rebajado;
    }

    set rebajado(rebajado:boolean){
        this._rebajado = rebajado;
    }

    get precioRebajado(){
        return this._precioRebajado;
    }

    set precioRebajado(precioRebajado:number){
        this._precioRebajado = precioRebajado;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad:number){
        this._cantidad = cantidad;
    }

    get total(){
        return this._total;
    }

    set total(total){
        this._total = total;
    }

    calcularTotal(){
        let suma = 0;
        if(this._rebajado == true){
            suma = this._cantidad * this._precioRebajado;
        }else{
            suma = this._cantidad * this._precioOriginal;
        }
        return suma;
    }

    aumentarNum(){
        this._cantidad++;
    }

    reducirNum(){
        this._cantidad--;
    }

}