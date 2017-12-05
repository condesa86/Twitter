
# **Reto Twitter**   
---
Para la realización de este reto de código replicamos de forma colaborativa el newsfeed de Twitter, completamos 4 puntos del flujo de versiones:

- [x] Versión 0.0.1
- [x] Versión 0.0.2
- [x] Versión 0.0.3
- [x] Versión 0.0.6 (Extra)


Utilizando eventos realizamos un formulario que permite agregar *tweets* a la página y que estos se vayan acomodando uno sobre otro por medio de un *boton*. El texto ingresado ajusta el contenedor de area de texto y este se va agregando al documento **html**.

El usuario no puede ingresar un *tweet* con texto vacío; Y por medio de un contador se hace una cuenta regresiva de cuantos caracteres quedan para ser ingresados, al momento de rebasar este limite de caracteres el contador coloca un signo de - a la izquierda.

Los *tweets* añadidos incluyen en su contenedor la hora en la que fueron agregados.

## HTML, javascript y CSS
---
### Versión 0.0.1

EL usuario puede ingresar texto y publicarlo como un *tweet*. Dicho texto se ingresa en el _textarea_ del formulario, este texto se guarda en el input con  el id="tweetbox".

El elemento que detonará el evento que crea un nuevo *tweet* visible es el botón `<input type="button" id="submit">`. Para ello declaramos la _function_ `postTweet(event)`.

Creamos un div que va a contener al nuevo tweet publicado, le damos la clase "newTeet" y lo colocamos dentro del `<body>`. A continuacón creamos un `<p>` que ira dentro del `<div>` recien creado, ubicamos el mensaje guardado en el input con `id="tweetbox"` y lo colocamos dentro del `<p>` recien creado.

Agregamos este `<p>` al `<div>`.

---

### Versión 0.0.2


- Para impedir que el usuario ingrese un texto vacío desactivamos el botón del formulario. Para deshabilitar el botón de "twittear". Primero sabemos que su valor por default es true. La fuente del evento será el textarea del formulario, comenzamos a escuchar este evento. Creamos dos funciones, una que determinará cuando el botón estará habilitado ```function enableButton()``` y otra cuando estará deshabilitado  ```function enabledisableButton()```.

---
### Versión 0.0.3

- Para crear un contador de caracteres tomamos como referencia el textarea del formulario y comenzamos a escuchar los caracteres ingresados. Creamos una función que contará el número de caracteres ```function countCharacters()```, para ello creamos una variable que determine el numero límite de caracteres y otra variable que tenga como valor la longitud del texto ingresado y para hacer una comparacion entre estas dos variables creamos un if

```if (howManyCharacters <= maxLength) {
    charactercount.innerHTML = (maxLength - howManyCharacters) + " characters remaining";
  }
  else if (howManyCharacters > maxLength) {
    charactercount.innerHTML = -(howManyCharacters - maxLength) + " characters remaining";
  }
}
```

- Hacemos uso de la función enable or disabled button para que el botón del formulario se desactive cuando el limite de cracteres ingresados se rebase.


---

### Versión 0.0.6 (Extra)

Para agregar la hora exacta en a que el tweet fue agregado primero creamos un `<p>` con su respectiva clase donde se mostrará la hora. Hacemos variables donde se contienen las horas, los minutos y los segundos y hacemos otra variable con estos elementos acomodados con la sintaxis correcta. Agregamos el `<p>` al `<div>`.
