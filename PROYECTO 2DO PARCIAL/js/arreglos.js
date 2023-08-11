class Arreglos {
    acuDivisores(num) {
        let acu = 0
        for (let c = 1; c < num; c++) {
            if (num % c == 0) {
                acu = acu + c
            }
        }
        return acu
    }
    mayor() {
        let datos = document.getElementById("datos").value
        let numeros = datos.split(";")
        console.log(numeros)
        let may = parseInt(numeros[0])
        for (let i = 1; i < numeros.length; i++) {
            if (may < parseInt(numeros[i])) {
                may = parseInt(numeros[i])
            }
        }
        let resp = document.getElementById("resp")
        resp.textContent = `El mayor del arreglo[${numeros}] es: ${may}`
        console.log(may)
    }
    menor() {
        let datos = document.getElementById("datos").value
        let numeros = datos.split(";")
        console.log(numeros)
        let menor = parseInt(numeros[0])
        for (let i = 1; i > numeros.length; i--) {
            if (menor > parseInt(numeros[i])) {
                menor = parseInt(numeros[i])
            }
        }
        let resp = document.getElementById("resp")
        resp.textContent = `El menor del arreglo[${numeros}] es: ${menor}`
        console.log(menor)
    }
    promedio() {
        let datos = document.getElementById("datos").value
        let arreglo = datos.split(";")
        console.log(arreglo)
        let suma = parseInt(arreglo[0])
        for (let i = 1; i < arreglo.length; i++) {
            suma += parseInt(arreglo[i])
        }
        console.log(suma)
        let promedio = suma / arreglo.length
        console.log(promedio)
        resp.textContent = `el promedio del arreglo [${arreglo}] es: ${promedio}`
    }
    invertido() {
        let datos = document.getElementById("datos").value
        let nombres = datos.split(";")
        console.log(nombres)
        for (let i = 0; i < nombres.length; i++) {
            let reverso = nombres[i].split("").reverse().join("")
            console.log(reverso)
            resp.textContent = `el invertido de los nombres es ${reverso}`
        }


    }
    adivinaelnum() {
        let numeros = []
        for (let i = 0; i < 100; i++) {
            numeros.push(Math.floor(Math.random() * 100) + 1)
        }
        let ingresado = document.getElementById("datos").value
        if (numeros.indexOf(Number(ingresado)) !== -1) {
            console.log("adivinaste!!")
            resp.textContent = `Adivinaste el numero que estaba pensando`
        } else {
            console.log("error")
            resp.textContent = `No has acertado`
        }
    }


    buscarArreglo() {

        let datos = document.getElementById("datos").value
        let arreglo = datos.split(";")
        let buscado = document.getElementById("buscado").value
        let c = 0
        let enc = false
        while (c < arreglo.length && enc == false) {
            if (arreglo[c] == buscado) {
                enc = true
            } else {
                c = c + 1
            }
        }

        let resp = document.getElementById("resp")
        if (enc == true) {
            //console.log(buscado, "se encuentra en la pos: ",c)
            resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
        } else {
            //console.log(buscado," no se encuentra")
            resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
        }

    }

    insertar() {
        let arreglo = [10, 20, 30, 40, 50, 60, 70, 80, 90]
        let datoAInsertar = document.getElementById("datos").value
        console.log(datoAInsertar)
        let posición = document.getElementById("datos2").value
        if (posición < 0 || posición > arreglo.length) {
            console.log("La posición es inválida.")
            resp.textContent = ("La posición es inválida.")
        }
        else {
            arreglo.splice(posición, 0, datoAInsertar)

            console.log("Arreglo después de insertar el dato: " + arreglo)
            resp.textContent = `Arreglo después de insertar el dato: ${arreglo}`
        }
    }
    eliminar() {
        let datos = document.getElementById("datos").value
        let arreglo = [10, 20, 30, 40, 50]
        arreglo.splice(datos, 1)
        console.log(arreglo)
        resp.textContent = arreglo
    }

    sumaDivisores() {
        let datos = document.getElementById("datos").value
        console.log(datos)
        let numeros = datos.split(";")
        let acu, num = 0, resultado = ""
        // recorre cada elemento del arreglo
        for (let i = 0; i < numeros.length; i++) {
            // proceso de suma de divisores
            num = parseInt(numeros[i])
            acu = this.acuDivisores(num)
            resultado = resultado + acu + "|"
        }
        let resp = document.getElementById("resp")
        resp.textContent = `La suma de los divisores del arreglo[${numeros}] son: ${resultado}`
        console.log(resultado)

    }

    perfectos() {
        let datos = document.getElementById("datos").value
        let numeros = datos.split(";")
        let acu, num = 0, resultado = ""
        // recorre cada elemento del arreglo
        for (let i = 0; i < numeros.length; i++) {
            // proceso de suma de divisores
            num = parseInt(numeros[i])
            acu = this.acuDivisores(num)
            if (acu == num) {
                resultado = resultado + num + "|"
            }
        }
        let resp = document.getElementById("resp")
        resp.textContent = `Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`

    }
    primos() {
        let datos = parseInt(document.getElementById("datos").value)
        let num = datos.split(";")
        console.log(num)
        let cont = 0
        for (let i = 0; i < arr.length; i++) {
            if (esprimo(num[i])) {
                cont++
            }
            if (num % 2 == 0) {
                console.log = `${num} No es primo`
            } else {
                console.log = `${num} Es primo`
            }

        }
        console.log(cont)
    }

    numAletras() {
        let num = document.getElementById("datos").value
        let unidad = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
        let decenas = ["dies", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
        let centena = ["cien"]
        let resp = document.getElementById("resp")
        let resultado = ""
        if (num >= 99) {
            resultado += numeroAletras(Math.floor(num / 100)) + "y" + centena[0]
            num %= 100
        }
        if (num >= 9) {
            resultado += decenas[Math.floor(num / 10) - 1] + " y "
            num %= 10
        }
        if (num >= 0) {
            resultado += unidad[num - 0]
            console.log(resultado)
            resp.textContent = resultado
        }


    }
    base2_10() {
        let digito, numeros = [], base10 = "", aux
        let num = parseInt(document.getElementById("datos").value)
        aux = num
        while (num > 0) {
            digito = num % 2
            num = Math.floor(num / 2)
            numeros.push(digito)
        }
        for (let ind = numeros.length - 1; ind >= 0; ind++) {
            base10 = base10 + numeros[ind]
        }
        console.table({ aux, base2: base10 })
        let resp = document.getElementById("resp")
        resp.textContent = `Base10 [${aux}] a base 2 es: ${base10} `
    }
    base10_2() {
        let digito, numeros = [], base2 = "", aux
        let num = parseInt(document.getElementById("datos").value)
        aux = num
        while (num > 0) {
            digito = num % 2
            num = Math.floor(num / 2)
            numeros.push(digito)
        }
        for (let ind = numeros.length - 1; ind >= 0; ind--) {
            base2 = base2 + numeros[ind]
        }
        console.table({ aux, base2 })
        let resp = document.getElementById("resp")
        resp.textContent = `Base10 [${aux}] a base 2 es: ${base2} `
    }


    estudiantes() {
        const notas = [
            { nombre: "ana", n1: 10, n2: 20 },
            { nombre: "dan", n1: 20, n2: 10 },
            { nombre: "jose", n1: 30, n2: 50 },
            { nombre: "miguel", n1: 40, n2: 40 },
        ]

        let est, prom
        for (let i = 0; i < notas.length; i++) {
            est = notas[i]
            prom = (est.n1 + est.n2) / 2
            console.log(est.nombre, prom)
            resp.textContent = `el promedio de ${est.nombre} es: ${prom}`

        }
    }
    sueldoEmpleados() {
        let empleados = [
            { nombre: "ana", vh: 5, nh: 40 },
            { nombre: "Mary", vh: 10, nh: 40 },
            { nombre: "Jose", vh: 2, nh: 40 }
        ]
        let sumaSueldos = 0
        for (let i = 0; i < empleados.length; i++) {
            let sueldo = empleados[i].vh * empleados[i].nh;sumaSueldos += sueldo
        }
        let promedioSueldos = sumaSueldos / empleados.length
        let resp = document.getElementById("resp")
        resp.textContent = `El promedio de sueldos de los empleados es: [${promedioSueldos}]`
    }
}


const arr = new Arreglos()

