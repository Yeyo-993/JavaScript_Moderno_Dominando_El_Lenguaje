class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spaiderman');
const ironman  = new Persona('Tony Stark', 'Iroman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);

spiderman.miFrase();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

console.log(spiderman.getComidaFavorita);

console.log(spiderman);

