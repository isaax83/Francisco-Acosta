// ejercicio 4: suponga que se tiene un conjunto de calificaciones de un grupo
// de 10 min alumnos. Realizar un algoritmo para calcular la calificacion premodedio
// y la calificacion mas baja del todo el grupo.
Proceso ejercicio4
	Definir calificacion_promedio,calificacion_baja Como Real;
	Definir calificacion,suma Como Real;
	Definir i Como Entero;
	suma <- 0;
	calificacion_baja <- 99999;
	Para i<-1 Hasta 10 Hacer
		Escribir i,'dijite una calificacion: ';
		Leer calificacion;
		// suma iterativa de las calificaciones
		suma <- suma+calificacion;
		// calculamos la menor calificacion
		Si calificacion<calificacion_baja Entonces
			calificacion_baja <- calificacion;
		FinSi
	FinPara
	calificacion_promedio <- suma/10;
	Escribir 'la calificacion promedio es: ',calificacion_promedio;
	Escribir 'la calificacion mas baja es: ',calificacion_baja;
FinProceso
