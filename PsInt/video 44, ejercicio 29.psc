// ejercicio 5: calcular el factor de un numero
// mayor o igual a 0
Proceso ejercicio5
	Definir num Como Entero;
	Definir i,factorial Como Entero;
	Repetir
		Escribir 'dijite un numero: ';
		Leer num;
	Hasta Que num>=0
	i <- 1;
	factorial <- 1;
	// N!=1*2*3*...*N
	Mientras i<=num Hacer
		factorial <- factorial*i;
		i <- i+1;
	FinMientras
	Escribir "al factorial es: ",factorial	;
FinProceso
