// ejercicio 2: se desea calcular independientemente la suma
// de los numeros pares e impares compredndidos entre el 1 y 50
Proceso ejercicio2
	Definir suma_pares,suma_impares,i Como Entero;
	suma_pares <- 0;
	suma_impares <- 0;
	Para i<-2 Hasta 49 Hacer
		Si i mod 2=0 Entonces
			suma_pares <- suma_pares+i;
		SiNo
			suma_impares <- suma_impares+ i;
		FinSi
	FinPara
	Escribir "la suma de pares es: ",suma_pares;
	Escribir "la suma de impares es: ",suma_impares;
FinProceso
