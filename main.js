console.log("Hola");
let modal = document.getElementById('modal');
let muneco = document.getElementById('muneco');
const btnEncriptar = document.getElementById('Encriptar');
const btnDesencriptar = document.getElementById('Desencriptar');
const mensaje2 = document.getElementById('texto2');
const mensajes = document.getElementById('mensaje');

btnEncriptar.addEventListener('click', () => {
  const msgEncr = mensaje2.value.replace(/[aeiou]/g, (vocal) => {
    switch (vocal) {
      case 'a':
        return 'ai';
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return vocal;
    }
  });
  mensajes.innerHTML = '';
  mensajes.innerHTML = msgEncr;
  muneco.style.display = 'none';
  console.log(msgEncr);
  mensajes.style.left = '5%';
  mensajes.style.right = '25%';
  mensajes.style.bottom = '41%';
  mensajes.style.alignContent = 'center';
  mensajes.style.justifyContent = 'center';
  mensajes.style.fontSize = '20px';
  mensajes.style.fontWeight = '200';
  mensajes.style.color = '#343a40a1';
});

btnDesencriptar.addEventListener('click', () => {
  const msgEncr = mensaje2.value.replace(/[aiouefat]/g, (vocal) => {
    switch (vocal) {
      case 'ai':
        return 'a';
      case 'enter':
        return 'e';
      case 'imes':
        return 'i';
      case 'ober':
        return 'o';
      case 'ufat':
        return 'u';
      default:
        return vocal;
    }
  });
  mensajes.innerHTML = '';
  mensajes.innerHTML = msgEncr;
  muneco.style.display = 'none';
  console.log(msgEncr);
  mensajes.style.left = '5%';
  mensajes.style.right = '25%';
  mensajes.style.bottom = '41%';
  mensajes.style.alignContent = 'center';
  mensajes.style.justifyContent = 'center';
  mensajes.style.fontSize = '20px';
  mensajes.style.fontWeight = '200';
  mensajes.style.color = '#343a40a1';
});
