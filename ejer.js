const leer = require ("prompt-sync")()
const escribir = console

class ejercicio1{
	ejercicio1(){
	//definir variables para el algoritmo
	let a,b,c,resultado
	a=0, b=0, c=0,
	//entrada: a=leer, b=leer, c=leer
	a= leer ("digite el valor de A:")
	b= leer ("digite el valor de B:")
	c= leer ("digite el valor de C:")
	//proceso: (-b+Math.sqrt(b^2-4*a*c))/(2*a)
	resultado = (-b+Math.sqrt(b^2-4*a*c))/(2*a)
	//salida: resultado
	escribir.log ("el resultado es: ",resultado)
	}
}



class ejercicio2{
ejercicio2(){
	//definir variables para el algoritmo
    let a,b,resultado 
	a=0; b=0
	//entrada: a=leer, b=leer
	a= leer ("Digite el valor de A: ");
	b= leer ("Digite el valor de B: ");
	//proceso: ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b)
    resultado = ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b)
	//salida: resultado
	escribir.log("El resultado es: ",resultado)
}
}


//ejercicio 3: intercambiar el valor de 2 variables
class ejercicio3{
ejercicio3(){
	//definir variables para el algoritmo
    let a,b,aux 
	//entrada: a=leer, b=leer
    a= leer ("Digite el valor de a: ")
	b= leer ("digite el valor de b: ")
	//proceso
    aux=a
	a=b
	b=aux
	//salida: a, b
	escribir.log( "El nuevo valor de a es: ",a)
	escribir.log( "El nuevo valor de a es: ",b)
  }
}



//suma de dos variables
class ejercicio4{
ejercicio4(){
	//definir variables para el algoritmo
	let a,b,c,resultado 
	a= 10
	b= 20
	//entrada:c=leer
	c=leer ("Digite un numero:")
	//proceso: a+b+c
	resultado = a+b+c
	//salida: resultado
	console.log( "el resultado es: ",resultado); 
	}
}


//suma de una varibale(a=10)
class ejercicio5{
ejercicio5(){
	//definir variables para el algoritmo
	let a,b,resultado 
	a=10
	//entrada: b=leer
	b= parseInt(leer ("Digite un numero:"))
	//proceso: a+b
	//sumamos a y b, y el resultado lo almacenamos
	resultado = a+b
	//salida: resultado
	console.log ("El resultado es: ",resultado);
	}
}
class ejercicio6{
ejercicio6(){
	let a,b,resultado

	a = 10

	b=parseInt (leer("Digite un numero: "))
	
	resultado = a+b
	escribir.log("El resultado es tu numero sumado a 10: ",resultado)
}
}

//ejercicio: calcular la cantidad de segundos que estan incluidos en el
//numero de horas, minutos y segundos ingresados por el usuario.
class ejercicio7{
ejercicio7(){
	//definir variables
   let horas, minutos,segundos
   let horas_seg, minutos_seg, total_seg 
   //entrada: horas=leer, minutos=leer, segundos=leer
   horas= leer ("Digite las horas: ")
   minutos= leer ("Digite los minutos: ")
   segundos= leer ("Digite los segundos: ")
   //proceso: horas*3600, minutos*60, hora+minutos+segundos
    horas_seg= horas * 3600 //calcular el equivalente en segundos
    minutos_seg= minutos * 60
    total_seg= horas_seg + minutos_seg + segundos 
	//salida: total_seg
    escribir.log("los segundo equivalentes son: ",total_seg)
  }
} 


// ejercicio: hacer un programa para ingresar el radio de uncirculo y se
// reporte su área y la longitud de la circunferencia.
//entrada = radio
//Proceso = area = pi*radio^2; lon = 2*pi*radio
//salida = area,lon
class ejercicio8{
ejercicio8(){
	//definir variables
		let radio,area,lon 
		//entrada: radio=leer
		  radio= leer ("Digite el valor del radio:")
		  //proceso: area = pi*radio^2; lon = 2*pi*radio
		  area = Math.PI * radio**2
		  lon = 2 * Math.PI *radio
		  //salida: area, lon
		  console.log( "El area de la circunferencia es: ",area)
		  console.log( "la longitud es: ",lon)
	  }
}


// ejercicio: Un maestro desea saber que porcentaje de hombres y que
// porcentaje de mujeres hay en un grupo de estuadiantes
class ejercicio9{
ejercicio9(){
	let num_hombres,num_mujeres 
	   let total_estudiantes 
	   let porcentajeH, porcentajeM 

	   //entrada: num_hombres=leer, num_mujeres=leer 
	   num_hombres= leer ("digite el numero de hombres:")
	   
	   num_mujeres= leer ("digite el numero de mujeres: ")
	   //proceso: total_estudiantes = num_hombres+num_mujeres
	   total_estudiantes = num_hombres+num_mujeres
	   porcentajeH = num_hombres / total_estudiantes * 100;
	   porcentajeM = num_mujeres/total_estudiantes * 100;
	   //salida: porcentajeH, porcentajeM
	   console.log( "el porcentaje de hombres es: ",porcentajeH,"%")
	   console.log("el porcentaje de mujeres es: ",porcentajeM,"%")
}
}


// ejerccio: un profesor prepara tres cuestionarios para la evaluacion 
// A, B y C, se sabe que se tarde 5 minutos en revisar el cuestionario A,
// 8 en revisar el cuestionario B y 6 en el C. la cantidad de examenes de cada
// tipo se entraron por teclado. ¿cuantas horas y cuantos minutos se tardara en
// revisar todas las evaluaciones
class ejercicio10{
ejercicio10(){
	let cantidadA,cantidadB,cantidadC 
		let tiempoA,tiempoB,tiempoC 
		let tiempo_total 
		let horas, minutos 
		//entrada: cantidadA=leer, cantidadB=leer, cantidadC=leer
		cantidadA= leer ("digite la cantidad de cuestionarios A: ")
		cantidadB= leer("digite la cantidad de cuestionarios B: ")
		cantidadC= leer ("digite la cantidad de cuestionarios C: ")
		//proceso: calcular los minutos que se tarda en calcular por coda cuestionaro
		tiempoA = cantidadA * 5
		tiempoB = cantidadB * 8
		tiempoC = cantidadC * 6
		// calculamos el tiempo total que le toma revisar todos los cuestionarios
		tiempo_total = tiempoA + tiempoB + tiempoC 
		// calculamos las horas y los minutos
		horas = Math.trunc(tiempo_total / 60)
		minutos = tiempo_total % 60;
		//salida: horas, minutos
		escribir.log("se tardara ",horas," horas y ",minutos," minutos ")
	}
}

// ejercicio: Una tienda ofrece un descuento del 15% sobre el total de la
// compra y yun cliente desea saber cuanto deberia pagar finalmente por su compra
class ejercicio11{
	ejercicio11(){
     //entrada: precio=leer
    let precio,descuento,precio_final 
    precio=leer('dijite el precio a pagar: ')
	//preoceso: descuento=precio*0.15;
    descuento=precio*0.15;
    precio_final=precio-descuento;

    //salida: precio final 
    escribir.log('el precio a pagar es de: ',precio_final)
	}
}

// un alumno desea saber cuál será su calificacion final en la materia de Algoritmo.
// dicha calificacion de compone de los siguientes porcentajes:
// 55% del promedio de sus calificaciones parciales.
// 30% de la calificacion del examen FinAlgoritmo
// 15% de la calificacion de un trabajo final.
class ejercicio12{
	ejercicio12(){
	//definir variables
    let parcial1,parcial2,parcial3,promediop,notasparciales
    let examen_final,notaexamen
    let notatrabajo,notafinaltrabajo 
    let notafinal 
    //entrada: dijite variables
    parcial1=leer("dijite nota parcial 1: ")
	parcial2=leer("dijite nota parcial 2: ")
	parcial3=leer("dijite nota parcial 3: ")

    //proceso: (parcial1+parcial2+parcial3)/3
    promediop=(parcial1+parcial2+parcial3)/3
    notasparciales=promediop*0.55

    examen_final=leer('dijite la nota del examen final: ')
    notaexamen=examen_final*0.3

    notatrabajo=leer('dijite la nota del trabajo final: ')

    notafinaltrabajo=notatrabajo*0.15
    notafinal=notasparciales+notaexamen+notafinaltrabajo
	//salida: nota final
    escribir.log ('la calificacion final es: ',notafinal)
	}
}

// ejercicio 1: ingrese un numero entero y reportar si es par o impar.
class ejercicio13{
ejercicio13(){	
    let num
	//entrada: num
	num= parseInt(leer('dijite un numero: '))
	
	//proceso: si num es par o impar(num%2==0) 
	if (num%2==0) 
	   //salida: num par
		escribir.log ('el numero ',num,' es par')
	   //salida: num impar
		else{
		escribir.log ('el numero ',num,' es impar')
		}
	}
}
// determinar si un alumno aprueba o reprueba un curso sabiendo que aprobaria
// si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario
class ejercicio14{
ejercicio14(){
	let nota1,nota2,nota3,promedio
	//entrada: dijite las notas para sacar los promedios
	nota1 = parseInt(leer("dijite nota 1: "))
	nota2 = parseInt(leer("dijite nota 2: "))
	nota3 = parseInt(leer("dijite nota 3: "))

	//rpoceos: (nota1+nota2+nota3)/3
	promedio = (nota1+nota2+nota3)/3
	//si la nota es menor a 70 el alumno reprueba
	if (promedio>=70) {
		//salida: promedio
		escribir.log("el alumno esta aprobado con: ",promedio)
	} else {
		escribir.log("El alumno esta reprobado con: ",promedio)
	}
}
}

// en un almacen se hace un 20% de descuento a los clientes 
// cuya compra supere los $100
// ¿cual será la cantidad que pagará una persona por su compra?
class ejercicio15{
ejercicio15(){
	let compra,descuento,precio_final

	//entrada: cantidad de dinero a pagar
	compra=leer("digite la cantidad a pagar (se obtiene un % si la cantidad es mayor de 100): ")


	//proceso:descuento por una compra mayor a $100
	if (compra>100) {
		descuento = compra*0.2
	} else {
		descuento = 0
	}
	precio_final = compra-descuento

	//salida: precio final
	escribir.log("el precio a pagar es: ",precio_final)
}
}

// ejercicio: leer 2 numeros, si son iguales que los multiplique, si el
// primero es mayor que el segundo que los reste si no que los sume.
class ejercicio16{
ejercicio16() {
	let num1,num2,resultado
	//entrada: dijite los numeros
	num1=leer("digite numero 1: ")
	num2=leer("dijite numero 2: ")
	//proceso:num1*num2; num1-num2; um1+num2
	if (num1==num2) {
		resultado = num1*num2;
	} else {
		if (num1>num2) {
			resultado = num1-num2;
		} else {
			resultado = num1+num2;
		}
	}
	//salida: resultado
	escribir.log("el resultado es: ",resultado)

}
}


// ejercicio: leer tres numeros diferentes e impar
// el numero mayor de los tres.
class ejercicio17{
ejercicio17(){
	//entrada: definir las variables 
	let num1,num2,num3
	num1=leer("dijite un numero(num1): ")
	num2=leer("dijite un numero(num2): ")
	num3=leer("dijite un numero(num3): ")
	//proceso:(num1>num2 && num1>num3);(num2>num1 && num2>num3)
	if (num1>num2 && num1>num3) {
		//salida: num1
		escribir.log("el mayor es: ",num1)
	} else {
		//salida: num2, num3
		if (num2>num1 && num2>num3) {
			escribir.log("el mayor es: ",num2)
		} else {
			escribir.log("el mayor es: ",num3)
		}
	}
}
}
//una fruteria ofrece las manzanas con descuento segun la siguiente tabla:
//numero de kilos coprados|  %descuento|
//       0-2              |      0%    |
//      2.01-5            |     10%    |
//      5.01-10           |     15%    |
//   10.01 en adelante    |     20%    |

class ejercicio18{
    ejercicio18(){

		//definir variables
        let preciok,kilos,precio_inicial,descuento,precio_final
        preciok=0,precio_final=0,precio_final=0,kilos=0

		//entrada: precio, kilos=leer
        preciok= leer("cuanto cuesta el kilo de manzanas")
        kilos= leer("cuantos kilos de manzana ha comprado")
		//proceso: precio*kilos
        precio_inicial=preciok*kilos
        if (kilos>=0 && kilos<=2){
            descuento=0
        }else{
            if (kilos>=2.01 && kilos<=10){

            }else{ 
                if(kilos>=5.01 && kilos<=10){
                    descuento=precio_inicial*0.10
                }else{
                    descuento=precio_inicial*0.2
                }
                  
            }
            }
			//salida: precio_final
            precio_final=precio_inicial-descuento
            escribir.log("el precio a pagar es:$",precio_final);
        }
    
    }

// ejercicio: elaborar un programa que me muestre los dias de la semana
// cuando ingrese los siete primeros numeros.
class ejercicio19{
	ejercicio19(){
	let num
	//entrada: dias de la semana(num)
	num= parseInt(leer("digite un numero del dia de la semana: "))
	//proceso: num
	switch (num) {
		//salida: dias de la semana
	    case 1:
			escribir.log("Lunes") 
			break
		case 2:
			escribir.log("Martes")
			break
		case 3:
			escribir.log("Miercoles")
			break
		case 4:
			escribir.log("Jueves")
			break
		case 5:
			escribir.log("Viernes")
			break
		case 6:
			escribir.log("Sabado")
			break
		case 7:
			escribir.log("Domingo")
			break
		default:
			
			escribir.log("error, no existe dia para ese numero")
		}
	}
}


// ejercicio: Elabora un programa que me muestre el significado
// de aniversario de cada década hasta los 60.
class ejercicio20{
ejercicio20(){
	let decada = new Number()
	//entrada: decada=leer
	decada=parseInt(leer("digite una decada"))
	//proceso: decada
	switch (decada) {
		//salida:
	case 10:
		escribir.log("bodas de hojalata")
		break;
	case 20:
		escribir.log("boda de porcelana")
		break;
	case 30:
		escribir.log("boda de perlas")
		break;
	case 40:
		escribir.log("bodas de rubi")
		break;
	case 50:
		escribir.log("bodas de oro")
		break;
	case 60:
		escribir.log("bodas de diamante")
		break;
	default:
		escribir.log("decada no existente")
	}
}
}

// ejercicio: hacer un programa que tenga un menu con las siguientes opciones
// opcion 1: elevar un numero a una pontecia x
// opcion 2: sacar la raiz cuadrada de un numero
// opcion 3: salir

class ejercicio21{
ejercicio21() {
	let opcion
	escribir.log("MENU")
	escribir.log("1. Elevar un numero a una potencia X(poner numero de menor a mayor)")
	escribir.log("2. Sacar la raiz cuadrada de un numero")
	escribir.log("3. Salir")
	opcion=parseInt (leer("digite una opcion:"))
	let num,pot,resultado
	switch (opcion) {
	case 1:
		//entrada:num=leer;pot=leer
		num=leer("digite un numero: ")
		pot=leer("digite la potencia: ")
		
		resultado = Math.pow(num,pot);
		escribir.log("el resultado es: ",resultado)
		break;
	case 2:
		//entrada:num=leer
		num=leer("digite un numero: ")

		resultado = Math.sqrt(num);
		escribir.log("el resultado es: ",resultado)
		break;
	case 3:
		break;
	default:
		escribir.log("se equivoco en opcion de menu")
	}
}
}
//ciclos	
class ejercicio22{
ejercicio22() {
	let i
	for (i=1;i<=10;i++) {
		//salida: i
		escribir.log(i)
	}
}
}


// ejercicio: calcular la suma de los"N" primeros numeros
class ejercicio23{
ejercicio23() {
	let n,suma,i

	//entrada: n=leer
	n=leer("digite la cantidad de numeros a sumarse: ")
	
	suma = 0

	//proceso: i=1;i<=n;i++
	for (i=1;i<=n;i++) {
		suma = suma+i;
	}
	//salida: suma
	escribir.log("la suma es: ",suma)
}
}

// ejercicio: se desea calcular independientemente la suma
// de los numeros pares e impares compredndidos entre el 1 y 50
class ejercicio24{
ejercicio24() {
	let suma_pares,suma_impares,i
	//entrada: suma_pares=leer	
	suma_pares = 0
	suma_impares = 0
	suma_pares=parseInt (leer("ingresa numero: "))
	//preoceso:(i=2;i<=49;i++) ; (i%2==0)
	for (i=2;i<=49;i++) {
		if (i%2==0) {
			suma_pares = suma_pares+i;
		} else {
			suma_impares = suma_impares+i;
		}
	}
	escribir.log("la suma de pares es: ",suma_pares)
	escribir.log("la suma de impares es: ",suma_impares)
	
}
}

// ejercicio: leer 10  numeros e imprimir cuantos son positivos,
// cuantos son negativos y cuantos neutros.
class ejercicio25{
	ejercicio25(){
		//definir	
	let num,i
	let	conteo_positivos,conteo_negativos,conteo_neutro
	conteo_positivos=0
	conteo_negativos=0
	conteo_neutro=0
	//proceso: i=1;i<=10;i++
	for (i=1;i<=10;i++){
		//entrada:num=leer
		num=leer ("dijite un numero: ")
		if (num==0){
			conteo_neutro=conteo_neutro+1
		}else{
			if (num>0){
				conteo_positivos=conteo_positivos+1
	         }else{
				conteo_negativos=conteo_negativos+1
			 }
			}
		}
		//salida: conteo de numeros
	escribir.log ("la cantidad de positivos es: ",conteo_positivos)
	escribir.log( "la cantidad de negativos es: ",conteo_negativos)
	escribir.log ("la cantidad de neutros es: ",conteo_neutro)
	
	}			
}

// ejercicio: suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 min alumnos. Realizar un algoritmo para calcular la calificacion premodedio
// y la calificacion mas baja del todo el grupo.
class ejercicio26{
	ejercicio26(){
		//definir	
		let calificacion,calificacion_baja,calificacion_promedio,suma,i
	suma = 0
	calificacion_baja = 99999
	//proceso:suma de calificaciones
	for (i=1;i<=10;i++) {
		//entrada: calificaion=leer
		calificacion=parseInt (leer("digite una calificacion: "))
		suma = suma+calificacion
		if (calificacion<calificacion_baja) {
			calificacion_baja = calificacion
		}
	}
	calificacion_promedio = suma/10
	//salida: calificaciones
	escribir.log("la calificacion promedio es: ",calificacion_promedio,)
	escribir.log("la calificacion mas baja es: ",calificacion_baja,)
}
}


// ejercicio: calcular el factor de un numero
// mayor o igual a 0
class ejercicio27{
ejercicio27(){

	//definir variables
	let num,i,factorial

	//repetir hasta que num<0
	do {
		//entrada:num=leer
		num=leer("digite un numero: ")
	//proceso:
	} while (num<0);
	i = 1;
	factorial = 1;
	while (i<=num) {
		factorial = factorial*i;
		i = i+1;
	}
	//salida:
	escribir.log("el factorial es: ",factorial)
}
}

// ejercicio: calcular la siguiente sumatoraia de los "N" elementos:
// S=1+4+9+...
class ejercicio28{
	ejercicio28(){
	let n_elementos 
	let i,suma
	n_elementos=parseInt (leer('dijite la cantidad de elementos a sumarse: '))
	i=1
	suma=0
	while (i<=n_elementos){
		suma=suma+i^2
		i=i+1
	}
	escribir.log ("la suma es: ",suma)	
}
}


// ejercicio: Ingresar "N" enteros, visualizar la suma de los numeros pares
// de la lista, cuantos numeros pares existen y cual es el promedio de los
// numeros impares.
class ejercicio29{
	ejercicio29(){
		let n_elementos,i,num
		let suma_pares,conteo_pares
		let suma_impares,conteo_impares
		let promedio_impares
		//entrada
	n_elementos=parseInt (leer("digite la cantidad de elementos a ingresar: "))
	i = 1
	suma_pares = 0
	conteo_pares = 0
	suma_impares = 0
	conteo_impares = 0
	//proceso
	while (i<=n_elementos) {
		//entrada
		num=parseInt (leer(".digite un numero: "))
		
		if (num%2==0) {
			// el numero es par
			// suma iterativa de pares
			suma_pares = suma_pares+num
			// conteo de pares
			conteo_pares = conteo_pares+1
		} else {
			// el numero es impar
			// suma iterativa de impares
			suma_impares = suma_impares+num
			// conteo de impares
			conteo_impares = conteo_impares+1
		}
		i = i+1;
	}
	if (conteo_pares==0) {
		escribir.log("no se han digitado numeros pares")
	} else {
		escribir.log("la suma de los numeros pares es: ",suma_pares,)
		escribir.log("el conteo de los numeros pares es: ",conteo_pares)
	}
	if (conteo_impares==0) {
		escribir.log("no se han digitado numeros impares")
	} else {
		promedio_impares = suma_impares/conteo_impares;
		//salida:promedio_impares
		escribir.log("el promedio de impares es: ",promedio_impares)
	}
}
}


//dada las horas trabajadas de 5 personas y la tarifa de pago, calcular
//el salario y la sumatoria de todos los salarios
//entrada: ingresar cantidad de trabajadores y la tarifa de pago
//Proceso :horas*tarifapago; sumatotal+salario
//salida: sumatotal
class ejercicio30{
ejercicio30(){
	//definir variables
	let num_trabajadores, i, tarifapago, horas, salario, sumatotal
	i = 1
	sumatoria_salario = 0

	//entrada: ingresar cantidad de trabajadores y la tarifa de pago
	num_trabajadores=parseInt(leer("digite el numero de trabajores: "))
	tarifapago=parseInt (leer("digite la tarifa: "))
	while (i<=num_trabajadores) {
		horas=parseInt (leer(i,".digite el valor de horas trabajadas por este trabajador:"))

		//Proceso :horas*tarifapago; sumatotal+salario
		salario_cada = horas*tarifa
		escribir.log("el valor a pagar de este trabajador es: ",salario_cada)
		i = i+1
		sumatoria_salario = sumatoria_salario+salario_cada
	}
	//salida: sumatotal
	escribir.log(" el valor total de salarios a pagar es de: ",sumatoria_salario,)
}
}

let a=new ejercicio30()
a.ejercicio30()