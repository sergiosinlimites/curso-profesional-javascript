console.log('Hello TypeScript');

function add(a: number, b: number){
    return a + b;
}

const sumatoria = add(2,3) // aquí ya sabe que sum será un number
console.log(sumatoria)

const sum = 'ajjaja';

// Boolean

let muted: boolean = true;
muted = false;
// muted = "ca" da error

// Números
let numerador: number = 42;
let denominador: number = 10;
// let denominador: number = "5"; No dejará esto
let resultado = numerador / denominador;

// String
let nombre: string = 'Sergio';
let saludo = `Me llamo ${nombre}`;

// Arreglo
// podemos definir si será un solo tipo los datos, diversos, o una combinación explicitamente decidida
let people: string[] = [];
people = ['Isabela', 'Nicolas', 'Sergio']
// people.push(42)
people.push('Andrés');
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push(9001);
peopleAndNumbers.push('Ricard');

// enum
// son conjuntos que ya vienen definidos los datos que se pueden usar
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

// cuando se inicializa uno, se tienen que inicializar todos

let colorFavorito: Color = Color.Azul;

console.log(`Mi color favorito es ${colorFavorito}`);

// Any
// cuando no sabemos de qué tipo será una variable
let comodin: any = 'Joker';
comodin = { type: 'Complicado' };

// Object
let someObject:object  = { type: 'Complicado' }

// Funciones
function sumador(a: number, b: number): number {
    return a + b
}

const suma = sumador(4,1);

/* function createAdder(a: number): (number) => number {
    return function (b: number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlusSix = addFour("jssas");

console.log(fourPlusSix) */

// otras formas de funciones que retornan funciones


function createAdder(a: number): (b: number) => number {
    return function(b): number {
        return a + b
    }
}

const addFour = createAdder(4)
// const fourPlusSix = addFour("jasjsja");

function fullName(name: string = 'Nicolas', lastName?: string):string {
    return `My name is ${name} ${lastName}`;
}

console.log(fullName());
const sergio = fullName('Sergio');
console.log(sergio);

// Interfaces

enum ColorRectangulo {
    rojo = 'rojo',
    verde = 'verde',
    azul = 'azul'
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: ColorRectangulo;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: ColorRectangulo.azul // si quito esto aparece solo "un rectángulo"
}

function area(r: Rectangulo){
    return r.alto * r.ancho
}

const areaRect = area(rect);
console.log(areaRect)

console.log(rect.toString()) // sirve por el prototype

rect.toString = function () {
    return this.color ? `un rectángulo de color ${this.color}`: 'un rectángulo';
}
console.log(rect.toString()) // sirve por el prototype
