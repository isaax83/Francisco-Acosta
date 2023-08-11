class Numeros {
    vuelto() {
        let num = parseInt(document.getElementById("num").value)
        let num1 = parseInt(document.getElementById("num1").value)
        console.log(num, num1)
        resp.textContent = `El vuelto de ${num} y ${num1} es ${num - num1}`

    }

    multiplo() {
        let num = parseInt(document.getElementById("num").value)
        let multi = parseInt(document.getElementById("multi").value)
        console.log(num, multi)
        if (num % multi == 0) {
            resp.textContent = `${num} Es multiplo de ${multi}`
        } else {
            resp.textContent = `${num} No es multiplo de ${multi}`
        }

    }
    divisores() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let divisores = []
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisores.push(i)
                console.log(divisores)
            }
        }
        resp.textContent = `los divisores son ${divisores}`
    }

    sumaDivisores() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let cont = 0
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                cont = cont + i
                console.log(cont)
            }
        }
        resp.textContent = `La suma de los divisores son ${cont}`
    }
    cantDivisores() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let cont = 0
        for (let i = 0; i <= num; i++) {
            if (num % i == 0) {
                cont = cont + 1
                console.log(cont)
                resp.textContent = `La cantidad de divisores de ${num} son ${cont}`
            }
        }
    }
    perfectos() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let sumaDivisores = 0
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sumaDivisores += i
            }
        }
        if (sumaDivisores === num) {
            console.log(`El número ${num} es perfecto`)
            resp.textContent = `El número ${num}  es perfecto`
        } else {
            console.log = (`El número ${num} no es perfecto`)
            resp.textContent = `El número ${num} no es perfecto`
        }


    }
    amigos() {
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        console.log(num1, num2)
        let sumaDivisoresNum1 = 0
        for (let i = 1; i < num1; i++) {    
            if (num1 % i === 0) {
                sumaDivisoresNum1 +i
                console.log(sumaDivisoresNum1 +=i)
            }
        }
        let sumaDivisoresNum2 = 0
        for (let i = 1; i < num2; i++) {
            if (num2 % i === 0) {
                sumaDivisoresNum2 + i
                console.log(sumaDivisoresNum2 += i)
            }
        }
        if (sumaDivisoresNum1 == num2 && sumaDivisoresNum2 == num1) {
            console.log("son amigos")
            resp.textContent = "son amigos"
        } else {
            console.log("no son amigos")
            resp.textContent = " no son amigos"
            
        }
    }
    primos() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        if (num % 2 == 0) {
            resp.textContent = `${num} No es primo`
        } else {
            resp.textContent = `${num} Es primo`
        }
    }

    primosGemelos() {
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        if (num1 % 2 == 1) {
            num1 = 1
            console.log`${num1} es primo`
        } else {
            num1 = 0
            console.log`${num1} no es primo`
        }
        if (num2 % 2 == 0) {
            num2 = 1
            console.log`${num2} es primo`
        } else {
            num2 = 0
            console.log`${num2} no es primo`
        }
        if (num1 == 0, num2 == 0) {
            resp.textContent = ` son primos gemelos`
        } else {
            resp.textContent = `no son primos gemelos`
        }

    }

    numInvertido() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let inver = 0
        while (num > 0) {
            inver = (inver * 10) + (num % 10); num = Math.floor(num / 10)
        }
        resp.textContent = `el invertido es ${inver}`
    }
    canDijitos() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let cantDigitos = num.toString().length
        resp.textContent = `la cantidad de dijitos es: ${cantDigitos}`
    }

    factorial() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let factorial = 1
        for (let i = 1; i <= num; i++)
            factorial = factorial * i
        console.log(factorial)
        resp.textContent = `El factorial de ${num} es: ${factorial}`
    }
    exponente() {
        let base = parseInt(document.getElementById("num").value)
        console.log(base)
        let exponente = parseInt(document.getElementById("exp").value)
        console.log(exponente)
        let resultado
        resultado = Math.pow(base, exponente)
        console.log(resultado)
        resp.textContent = `El resultado de ${base} elevado a la ${exponente} es de: ${resultado}`
    }
    tablamultiplicar() {
        let num = parseInt(document.getElementById("num").value)
        console.log(num)
        let tabla = ""
        for (let i = 1; i <= 12; i++) {
            tabla += `<br>${num} x ${i} = ${num * i}<br><br>`
        }
        console.log(tabla)
        resp.innerHTML = (tabla)
    }
    fibonacci() {
        let a = 0, b = 1, c = 0, cont = 2
        let num = parseInt(document.getElementById("num").value)
        let serie = a.toString() + "<br>" + b.toString()
        console.log(a, b)
        while (cont < num) {
            c = a + b
            console.log(c)
            serie = serie + "<br>" + c.toString()
            a = b
            b = c
            cont = cont + 1
        }
        resp.innerHTML = serie
    }

}
const numero = new Numeros();
