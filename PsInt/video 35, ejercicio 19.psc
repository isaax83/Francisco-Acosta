// ejercicio 7: elaborar un programa que me muestre los dias de la semana
// cuando ingrese los siete primeros numeros.
Proceso ejercicio7
	Definir num Como Entero;
	Escribir 'dijite un numero de la semana (1-7): ';
	Leer num;
	Segun num  Hacer
		1:
			Escribir 'lunes';
		2:
			Escribir 'Martes';
		3:
			Escribir 'Miercoles';
		4:
			Escribir 'Jueves';
		5:
			Escribir 'Viernes';
		6:
			Escribir 'Sábado';
		7:
			Escribir 'Domingo';
		De Otro Modo:
			Escribir 'Error, no existe dia con ese numero';
	FinSegun
FinProceso
