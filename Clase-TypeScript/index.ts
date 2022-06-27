/**
 * Este es un archivo TS
 */

/* class Persona{
    nombre: string;
    apellido: string;
    edad: number;

    constructor(n: string, a: string, e: number) {
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
    }
} */

/* let nombre: string;
let datos: number[];
let datos2: Array<number>;
let valor: number | string;
let ejemplo = true; */

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

class P1 implements Personaje{
    nombre: string;
    hp: number;
    habilidades: string[]; 
}

class Alumno {
    
    nombre: string;
    edad: number;
    id: string;
    
    constructor() {
        
    }
}
let alumnos: Alumno[];
let alumno1 = new Alumno(); //instancia alumno

class TipoDato<T>{
    dato: T;
}

let variable: TipoDato<string>;

function classDecorator<T extends{ new (...args: any[]): { } }> (constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

/* @classDecorator
class MiSuperClase {

    public miPropiedad: string = 'ABC123';
    
    imprimir() {
        console.log('Hola Mundo');
    }
    
}
const miClase = new MiSuperClase();
console.log(miClase); */