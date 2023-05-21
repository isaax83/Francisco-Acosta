//ejercicio 3: intercambiar el valor de 2 variables

Proceso sin_titulo
	definir a,b,aux Como Entero;
	
	Escribir "dijite el valor de a:";
	leer a;
	escribir "dijite el valor de b:";
	leer b;
	
	aux <- a;
	a <- b;
	b <- aux;
	
	Escribir "el nuevo valor de a es:",a;
	Escribir "el nuevo valor de b es:",b;
	
FinProceso
