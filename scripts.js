//ACA SE INGRESA EL TEXTO
const textBox = document.querySelector('#textBox');
//MUESTRA LA INFORMACION QUE SE VA INGRESANDO
const output = document.querySelector('#output');
//muestra la letra que se va ingresando en el input
textBox.addEventListener(
    "keydown",
    (e) => (output.textContent = `Ingresaste "${e.key}".`)
);