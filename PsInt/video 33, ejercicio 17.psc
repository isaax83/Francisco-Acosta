// ejercicio 5: leer tres numeros diferentes e impar
// el numero mayor de los tres.
Proceso ejercicio5
	Definir num1,num2,num3 Como Real;
	Escribir 'dijite tres numeros: ';
	Leer num1,num2,num3;
	Si num1>num2 Y num1>num3 Entonces
		Escribir 'el numero mayor es: ',num1;
	SiNo
		Si num2>num1 Y num2>num3 Entonces
			Escribir 'el mayor es: ',num2;
		SiNo
			Escribir 'el numero mayor es:',num3;
		FinSi
	FinSi
FinProceso
