class Singleton {
    private static instance: Singleton;

    private constructor(){
        // init
    }

    static getInstance(){ // static permite que se inicie la funcion sin tener una instancia
        if(!Singleton.instance){
            Singleton.instance = new Singleton; // a pesar de que el constructor es privado, al estar dentro de la clase, se puede llamar.
        }
        return Singleton.instance;
    }

}

export default Singleton;