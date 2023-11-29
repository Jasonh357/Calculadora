const keys = document.querySelectorAll('.keypad .number-operator')
const suma = document.getElementById('keyplus')
const borrar = document.getElementById('keyBackspace')
const screen = document.getElementById('screen')
const igual = document.getElementById('keyEqual')
const resta = document.getElementById('keyMinus')
const multlipicar = document.getElementById('keyMultiply')
const division = document.getElementById('keySlash')
const reiniciar = document.getElementById('keyReset')
const cambioTema = document.querySelector('.toggle-switch')
const body = document.querySelector('body')

let numeroActual = 0; // Número actual en pantalla
let total = 0; //numero total

//cambia los temas
const cambiarTema = () => {
    switch (true) {
        case body.classList.contains('theme1'):
            body.classList.replace('theme1', 'theme2');
            break;
        case body.classList.contains('theme2'):
            body.classList.replace('theme2', 'theme3');
            break;
        case body.classList.contains('theme3'):
            body.classList.replace('theme3', 'theme1');
            break;
    }
}
//El evento que hace cambiar los temas
cambioTema.addEventListener('click', cambiarTema)


//Captura los botones para los numeros y los simbolos
keys.forEach(key => {
    key.addEventListener('click', (e) => {
        const textoBoton = e.target.textContent;

        if (screen.textContent == '0' && textoBoton !== '.') {
            screen.textContent = textoBoton;
        }
        else {
            screen.textContent += textoBoton;
        }
        numeroActual = parseFloat(screen.textContent);
    })
})

//Captura el evento para borrar los numeros
borrar.addEventListener('click', () => {
    const textoActual = screen.textContent;
    if (textoActual.length > 0) {
        screen.textContent = textoActual.substring(0, textoActual.length - 1);
        numeroActual = parseFloat(screen.textContent)
    }
});

// Captura todos los eventos de las diferente acciones  
suma.addEventListener('click', () => {
    total += numeroActual;
    screen.textContent = '0';
    numeroActual = 0;
    operacion = 'suma'; // Guardar la operación actual
});

resta.addEventListener('click', () => {
    total = numeroActual;
    screen.textContent = '0';
    numeroActual = 0;
    operacion = 'resta'; // Guardar la operación actual
});

multlipicar.addEventListener('click', () => {
    total = numeroActual;
    screen.textContent = '0';
    numeroActual = 0;
    operacion = 'multiplicar'
});

division.addEventListener('click', () => {
    total = numeroActual;
    screen.textContent = '0';
    numeroActual = 0;
    operacion = 'dividir';
});


//Reinicia todo

reiniciar.addEventListener('click', (e) => {
    screen.textContent = "0"
    total = 0
});

//El evento para obtener el resultado de las operaciones
keyEqual.addEventListener('click', () => {
    if (operacion === 'suma') {
        total += numeroActual;
    } if (operacion === 'resta') {
        total -= numeroActual;
    } if (operacion === 'multiplicar') {
        total *= numeroActual;
    } else if (operacion === 'dividir') {
        total /= numeroActual
    }

    screen.textContent = total;
    numeroActual = total;
    total = 0;
});












