
function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
}

const saludar2 = function(nombre){
     console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

saludar('Sergio', 40, true, 'España');
saludar2('Fernando');
saludarFlecha();
saludarFlecha2('Melissa');
