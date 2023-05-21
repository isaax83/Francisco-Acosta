// ejercicio 9: hacer un programa que tenga un menu con las siguientes opciones
// opcion 1: elevar un numero a una pontecia x
// opcion 2: sacar la raiz cuadrada de un numero
// opcion 3: salir
Proceso ejercicio9
	Definir opcion Como Entero;
	Escribir 'MENU';
	Escribir '1,elevar un numero a una potencia x';
	Escribir '2, sacar la raiz cuadrada de un numero';
	Escribir '3, salir';
	Escribir 'dijite una opcion: ';
	Leer opcion;
	Segun opcion Hacer
		1:
			definir num, pot, resultado como reales;
			Escribir "dijite un numero: ";
			Leer num;
			Escribir "dijite la potencia";
			Leer pot;
			resultado <- num^pot;
			Escribir "el resultado es: ",resultado;
		2:
			definir num,resultado como reales;
			Escribir "dijite un numero: ";
			Leer  num;
			resultado <- rc(num);
			Escribir "el resultado es: ",resultado;
		3:
		De Otro Modo:
			Escribir "se equivoco de eopcion de menu";
	FinSegun
FinProceso
