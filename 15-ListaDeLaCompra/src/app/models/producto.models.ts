export class Producto {
    nombre: string;
    cantidad: number;
    departamento: string;

    constructor(_nombre: string = '', _cantidad: number = 0, _departamento: string = ''){
        this.nombre = _nombre;
        this.cantidad = _cantidad;
        this.departamento = _departamento;
    }
}