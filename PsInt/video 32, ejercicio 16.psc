// ejercicio 4: leer 2 numeros; si son iguales que los multiplique, si el
// primero es mayor que el segundo que los reste si no que los sume.
Proceso ejercicio4
	Definir num1,num2,resultado Como Real;
	Escribir 'dijite dos numeros: ';
	Leer num1,num2;
	Si num1=num2 Entonces
		// si son iguales multiplicamos
		resultado <- num1*num2;
	SiNo
		Si num1>num2 Entonces
			// si el primer numero es mayor los restamos
			resultado <- num1-num2;
		SiNo
			resultado <- num1+num2;
		FinSi
	FinSi
	Escribir 'el resultado es: ',resultado;
FinProceso
