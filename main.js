console.log("Hola");
let modal = document.getElementById('modal');
let muneco = document.getElementById('muneco');
let mensajes = document.getElementById('mensaje');
let mensaje2 = document.getElementById("texto2");
let btn_encriptar = document.getElementById('Encriptar');
let btn_desencriptar = document.getElementById('Desencriptar');


mensajes.innerHTML = 'Ningun mensaje fue encontrado';


btn_encriptar.addEventListener( "click", ()=>{
  msg_encr = mensaje2.value.replace('e','enter').replace('i','imes').replace('a','ai').replace('o','ober').replace('u','ufat')
  mensajes.innerHTML = '';
  mensajes.innerHTML = msg_encr;
  muneco.style.display = 'none'
  console.log(msg_encr);
  mensajes.style.left = '5%'
  mensajes.style.right = '25%'
  mensajes.style.bottom = '41%'
  mensajes.style.alignContent  = 'center'
  mensajes.style.justifyContent  = 'center'
  mensajes.style.fontSize  = '20px'
  mensajes.style.fontWeight  = '200'
  mensajes.style.color  = '#343a40a1'
})

btn_desencriptar.addEventListener( "click", ()=>{
  msg_encr = mensaje2.value.replace('enter','e').replace('imes','i').replace('ai','a').replace('ober','o').replace('ufat','u')
  mensajes.innerHTML = '';
  mensajes.innerHTML = msg_encr;
  muneco.style.display = 'none'
  console.log(msg_encr);
  mensajes.style.left = '5%'
  mensajes.style.right = '25%'
  mensajes.style.bottom = '41%'
  mensajes.style.alignContent  = 'center'
  mensajes.style.justifyContent  = 'center'
  mensajes.style.fontSize  = '20px'
  mensajes.style.fontWeight  = '200'
  mensajes.style.color  = '#343a40a1'
})