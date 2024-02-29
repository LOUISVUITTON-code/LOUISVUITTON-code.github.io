// INICIALIZAR AOS

AOS.init();

// TEXTO TYPING

const typed = new Typed('.typed', {
	strings: [
		'<i class="text">Developer.</i>',
		'<i class="text">Designer.</i>',
		'<i class="text">Front End.</i>',
		'<i class="text">Creative.</i>'
	],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 120, // Velocidad en mlisegundos para poner una letra,
	startDelay: 350, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 120, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

// MENU EFECTO 

document.addEventListener("DOMContentLoaded", function() {
    var toggleMenu = document.getElementById("toggle-menu");
    var navMenu = document.getElementById("nav");

    toggleMenu.addEventListener("click", function() {
        if (navMenu.style.display === "none" || navMenu.style.display === "") {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });
});

window.addEventListener("scroll", function () {
    var barraNavegacion = document.querySelector("nav");
    var pantallaPequena = window.matchMedia("(max-width: 768px)").matches;

    if (pantallaPequena) {
      barraNavegacion.classList.remove("abajo");
    } else {
      barraNavegacion.classList.toggle("abajo", window.scrollY > 0);
    }
  });

// DESCARGAR CURRICULUM

function descargarCV() {
    var url = 'CV_LCP.pdf';
    window.open(url, '_blank');
  }

// SKILLS BUTTON REDIRECCION

document.getElementById('skills-button').addEventListener('click', function () {
	window.location.href = '#cualidades-section';
});

