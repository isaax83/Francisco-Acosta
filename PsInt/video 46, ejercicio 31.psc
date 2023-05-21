// ejercicio 7: Ingresar "N" enteros, visualizar la suma de los numeros pares
// de la lista, cuantos numeros pares existen y cual es el promedio de los
// numeros impares.
Proceso ejercicio7
	Definir n_elementos,i,num Como Entero;
	Definir suma_par,conteo_pares Como Entero;
	Definir suma_impares,conteo_impares Como Entero;
	Definir promedio_impares Como Real;
	Escribir 'dijite la cantidad de elementos a ingresar: ';
	Leer n_elementos;
	i <- 1;
	suma_par <- 0;
	conteo_pares <- 0;
	suma_impares <- 0;
	conteo_impares <- 0;
	Mientras i<=n_elementos Hacer
		Escribir 'dijite un numero: ';
		Leer num;
		Si num MOD 2=0 Entonces
			// el numero es par
			// suma iterativa de pares
			suma_par <- suma_par+num;
			// conteo de pares
			conteo_pares <- conteo_pares+1;
		SiNo
			// el numero es impar
			// suma iterativa de impares
			suma_impares <- suma_impares+num;
			// conteo de impares
			conteo_impares <- conteo_impares+1;
		FinSi
		i <- i+1;
	FinMientras
	Si conteo_pares=0 Entonces
		Escribir 'no se han dijitado numeros pares';
	SiNo
		Escribir 'la suma de los numeros pares es: ',suma_par;
		Escribir 'el conteo de numeros pares es: ',conteo_pares;
		Si conteo_impares=0 Entonces
			Escribir 'no se han dijitado numeros impares';
		SiNo
			promedio_impares <- suma_impares/conteo_impares;
			Escribir 'el promedio impares es: ',promedio_impares;
		FinSi
	FinSi
FinProceso
