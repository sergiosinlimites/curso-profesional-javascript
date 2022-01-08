interface Observer { // van a recibir actualizaciones de la información
    update: (data: any) => void;
}

interface Subject {
    suscribe: (observer: Observer) => void;
    unsuscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject { // le decimos que va a implementar la interfaz de subject
    observers: Observer[] = [] // va a ser una lista de tipo observer
    
    constructor(){
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', () => {
            this.notify(el.value);
        });
    }

    suscribe(observer: Observer) {
        this.observers.push(observer);
    }

    unsuscribe (observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer;
        });
        this.observers.splice(index, 1);
    }

    notify(data: any){
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;
    constructor(el: string) {
        this.el = document.querySelector(el); // el elemento es un parámetro, si fuera un solo botón se coloca solo el id
    }

    update(data: any){
        this.el.innerText = data
    }
}

const valor = new BitcoinPrice();
const display1 = new PriceDisplay('#price1');
const display2 = new PriceDisplay('#price2');
const display3 = new PriceDisplay('#price3');

valor.suscribe(display1);
valor.suscribe(display2);
valor.suscribe(display3);


setTimeout(() => valor.unsuscribe(display1), 5000); // solo como ejemplo del unsuscribe
setTimeout(() => valor.unsuscribe(display2), 15000); // solo como ejemplo del unsuscribe
setTimeout(() => valor.unsuscribe(display3), 60000); // solo como ejemplo del unsuscribe