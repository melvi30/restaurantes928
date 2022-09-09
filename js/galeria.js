'use strict'

/*

 // Cuando haga CLICK en .a
   // .lightbox ADD CLASS "Activo"
   // .img ATTR "SRC"
   // .grande COLOCAR el SRC de .img

*/

const enlaces  = document.querySelectorAll('.afoto')
const lightbox = document.querySelector('.ligthbox')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
  enlaces[i].addEventListener('click', ( e )=>{
    e.preventDefault()
    let ruta = cadaEnlace.querySelector('.imgg').src 

    lightbox.classList.add('activo')
    grande.setAttribute('src', ruta)

    
  })
})

cerrar.addEventListener('click', ()=>{
lightbox.classList.remove('activo')
})