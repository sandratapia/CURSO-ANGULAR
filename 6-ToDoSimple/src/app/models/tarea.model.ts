export class Tarea {

    titulo: string;
    descripcion: string;
    completa: boolean;

    constructor(_titulo = '', _descripcion = ''){
        this.titulo = _titulo;
        this.descripcion = _descripcion;
        this.completa = false;
    }
}