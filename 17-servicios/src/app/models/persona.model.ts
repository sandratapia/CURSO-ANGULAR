export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;
    activo: boolean;

    constructor(_nombre: string, _apellidos: string, _edad: number, _activo: boolean){
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.edad = _edad;
        this.activo = _activo;
    }
}