class Cadena {
    vocales() {
        // "hola que tal"
        let frase = document.getElementById("datos").value
        let cv = 0, cc = 0
        for (let i = 0; i < frase.length; i++) {
            if (frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u') {
                cv = cv + 1
            }
            if (frase[i] >= 'a' && frase[i] <= 'z') {
                cc = cc + 1
            }
        }
        console.table({ cv, cc })
        let resp = document.getElementById("resp")
        resp.textContent = `cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`

    }
    cantPalabras() {
        let frase = document.getElementById("datos").value
        let cantPalabras = frase.split(" ")
        let cant = cantPalabras.length
        console.log(cant)
        resp.textContent = `la cantidad de palabras son: ${cant}`
    }
    carcEspeciales() {
        let frase = document.getElementById("datos").value // declaramos una variable con la frase
        let comas = frase.match(/,/g) // buscamos las comas en la frase
        let puntos = frase.match(/\./g) // buscamos los puntos en la frase
        let puntoYComas = frase.match(/;/g) // buscamos los punto y comas en la frase
        let dosPuntos = frase.match(/:/g) // buscamos los dos puntos en la frase
        let numeroComas = comas.length // obtenemos la longitud del array de comas
        let numeroPuntos = puntos.length // obtenemos la longitud del array de puntos
        let numeroPuntoYComas = puntoYComas.length // obtenemos la longitud del array de punto y comas
        let numeroDosPuntos = dosPuntos.length // obtenemos la longitud del array de dos puntos
        console.log(numeroComas)
        console.log(numeroPuntos)
        console.log(numeroPuntoYComas)
        console.log(numeroDosPuntos)

        resp.textContent = `comas ${numeroComas}, puntos ${numeroPuntos}, punto y comas ${numeroPuntoYComas}, dos puntos ${numeroDosPuntos}`

    }
    fraseIgual() {
        let frase = document.getElementById("datos").value
        let fraseSinEspacios = frase.replace(/\s+/g, "").toLowerCase() // eliminamos los espacios y convertimos a minúsculas
        let fraseInvertida = fraseSinEspacios.split("").reverse().join("") // invertimos la frase
        let esPalindromo = fraseSinEspacios === fraseInvertida; // comparamos la frase original y la invertida
        console.log(esPalindromo) // true
        if (esPalindromo = fraseSinEspacios === fraseInvertida) {
            resp.textContent = `La frase es igual`
        } else {
            resp.textContent = `no es igual`
        }

    }
    concatenarFrase() {
        let frase = document.getElementById("datos1").value // declaramos una variable con la primera frase
        let frase2 = document.getElementById("datos2").value// declaramos una variable con la segunda frase
        let salida = frase + " " + frase2; // concatenamos las dos frases en una tercera variable
        console.log(salida)
        resp.textContent = (salida)

    }
    fraseInver() {
        let frase = document.getElementById("datos").value // declaramos una variable con la frase
        let salida = frase.split("").reverse().join("") // invertimos la frase y la guardamos en otra variable
        console.log(salida)
        resp.textContent = (salida)

    }
    busCarac() {
        function posicionCaracter(frase, carBuscar) {
            return frase.indexOf(carBuscar)
          }
          let frase = document.getElementById("datos1").value
          let carBuscar = document.getElementById("datos2").value
          console.log(posicionCaracter(frase, carBuscar))
          
    }
    sumaDijitos(){
        function sumarDigitos(numero) {
            // Convertir la frase en un número
            numero = Number(numero);
            // Inicializar la suma total
            let suma = 0;
            // Mientras el número sea mayor que 0
            while (numero > 0) {
              // Obtener el último dígito usando %
              let digito = numero % 10;
              // Sumarlo a la suma total
              suma += digito;
              // Dividir el número entre 10 usando /
              numero = Math.floor(numero / 10);
            }
            // Devolver la suma total
            return suma;
          }
          
          // Ejemplo de uso
          let frase = document.getElementById("datos").value
          console.log(sumarDigitos(frase)); // 10
          
    }
}
let cad = new Cadena()
