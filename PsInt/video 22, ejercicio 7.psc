//ejercicio 1: calcular la cantidad de segundos que estan incluidos en el
//numero de horas, minutos y segundos ingresados por el usuario.

Proceso ejercicio1
	Definir horas, minutos, seg Como Entero;
	Definir horas_seg, minutos_seg, total_seg como enteros;
	
	Escribir "dijite las horas: ";
	leer horas;
	Escribir "dijite los minutos: ";
	leer minutos;
	Escribir "dijite los segundos: ";
	leer seg;
	
	horas_seg <- horas * 3600; //calcular el equivalente en segundos
	minutos_seg <- minutos * 60;
	
	total_seg <- horas_seg + minutos_seg + seg;
	
	Escribir "los segundos equivalentes son: ", total_seg;
	
FinProceso
