//EJEMPLO

// let cadena = "hola";
// cadena = true; //ESTO NO SE PUEDE HACER

//BOOLEAN
let esValido: boolean = true;
esValido=false;

//NUMBER
let edad: number = 12;

//STRING
let nombre:string = 'Felipe';

//ARRAY
let numeros: number[] = [12,3,4,5,8];

//TUPLA - ARRAY POSICIONES FIJAS
let sitio: [string, number] = ['Casa', 28008];

//ENUM
enum Estado {
    Offline,
    Indefinido,
    Online
}

let stat: Estado = Estado.Online;
console.log(stat); //DEVUELVE 2

//UNKNOWN
let sinTipo: unknown = "Hola";
sinTipo = 32;
sinTipo = true;

let nuevaCadena: string = 'esto es una cadena';

//ANY
let tipoIndefinido:any = 'esto es un mensaje';
nuevaCadena = tipoIndefinido;

//VOID
function logger(): void {
    console.log('logger');
}