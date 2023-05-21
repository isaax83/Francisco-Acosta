// ejercicio 1: calcular la suma de los"N" primeros numeros
Proceso ejercico1
	Definir n,suma,i Como Entero;
	Escribir 'dijite la cantidad de numeros a sumarse: ';
	Leer n;
	suma <- 0;
	
	Para i<-1 Hasta n Hacer
		suma <- suma+i;
	FinPara
	
	Escribir 'la suma es; ',suma;
FinProceso
