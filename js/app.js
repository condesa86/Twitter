/*Se creara el evento de enviar el tweet*/
var source1 = document.getElementById("send");
/*Se le pide que preste atención al click*/
source1.addEventListener("click", tweet);

/*Función para postear nuevos tweets*/
function tweet(event) {
  /*Se creará el div que contendrá el nuevo tweet*/
  var div = document.createElement('div');
  var ref = document.getElementById("publish");
  var container = document.getElementById("publish");
  //Colocamos el nuevo div en su lugar en el body.
  container.insertBefore(div, container.childNodes[0]);
  div.classList.add("new");
  /*se creará un nuevo p que contiene el texto del tweet*/
  var newP = document.createElement("p");
  var message = document.getElementById("tweettext").value;
  /*mensaje del tweet*/
  newP.innerText = message;
  div.appendChild(newP);
  /*Esto añadira la hora a cada tweet*/
  var newP2 = document.createElement("p");
  newP2.classList.add("dateClass");
  var d = new Date();
  var x = document.getElementById("send");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  /*De esta manera se mostraá la impresión de la hora de cada tweet*/
  var time = x.innerHTML = h + ":" + m + ":" + s;
  newP2.innerText = time;
  div.appendChild(newP2).appendChild(time);
}

/*Con esta función se agrega un 0 a las horas que solo tienen un digito*/
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
/*contador de carcteres */
var byText = document.getElementById("tweettext");
/*Se pide que preste atención a lo contenido en el input*/
byText.addEventListener("input", countCharacters);
/*Función para contar los caracteres*/
function countCharacters() {
  /*se determina el límite de caracteres*/
  var maxLength = 280;
  var howManyCharacters = tweettext.value.length;
  /*este if determina el largo máximo del tweet*/
  if (howManyCharacters <= maxLength) {
    /*el contador mostrar los caracteres que restan para introducir*/
    contador.innerHTML = (maxLength - howManyCharacters) + " characters remaining";
  }else if (howManyCharacters > maxLength)
  {
    contador.innerHTML = -(howManyCharacters - maxLength) + " characters remaining";
  }
}
/*desactivar el botón de Twittear*/
document.getElementById("send").disabled = true;
var charactersCount = document.getElementById("tweettext");
byText.addEventListener("input", activeButton);

/*funciones para activar o desactivar el botón*/
function activeButton(){
  /*Si el valor del input está vacío se desactiva el botón*/
  if (tweettext.value == '')
  {
    disableButton();
  }
  /*de lo contrario se activa el botón*/
  else (tweettext.value !== '')
  {
    enableButton();
  }
}
/*función de activar botón*/
function enableButton() {
  document.getElementById("send").disabled = false;
}
/*función de desactivar botón*/
function disableButton() {
  document.getElementById("send").disabled = true;
}


//Cambia de clase de acuerdo al número de carácteres...
//La fuente del evento para contar los carácteres es el input textarea.
var charactersCount = document.getElementById("tweettext");
//Declaramos que estamos "escuchando" en busca de eventos.
charactersCount.addEventListener("input", counter);
/*desactivara el botón de twittear si se exceden los 280 caracteres*/
function counter() {
  //Le indicamos que el límite de carácteres es 140.
  var maxLength = 280;
  var howManyCharacters = tweettext.value.length;
  if (howManyCharacters > maxLength) {
    disableButton();
  }


}
