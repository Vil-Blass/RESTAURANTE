// Obtén una referencia al botón y al contador y siguiente pagina
var button = document.querySelectorAll(".myButton");
// for(let i=0; i< button.length; i++){
//   button[i].addEventListener('click ',function()) {
//     console.log('hola')
//   });
// }


// Inicializa el contador
var count = 0;

function pruebacard(a) {
  var num = a;
  console.log("Valor num: " + num);

  count++;

  button[i].innerHTML = count;
  // idCounter.innerHTML = count;
  console.log(count);
  window.open("/html/nosotros.html", "_blank");
}
