'use stric'

/* SI Lang=ES a .a-len = 0 ADD 'ACTIVO' 
    Y SI Lang=EN entonces .a-leng = 0 REMOVE "ACTIVO" y .a-leng = 1 ADD 'ACTIVO' */


const idioma = document.querySelector('.idioma').getAttribute('lang');

const lenguaje = document.querySelectorAll('.leng');
lenguaje.getAttribute('value')
