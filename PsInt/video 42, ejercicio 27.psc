// ejercicio 3: leer 10  numeros e imprimir cuantos son positivos,
// cuantos son negativos y cuantos neutros.
Proceso ejercicio3
	definir num,i como entero;
	definir conteo_positivos,conteo_negativos,conteo_neutro como enteros;
	conteo_positivos <- 0;
	conteo_negativos <- 0;
	conteo_neutro <- 0;
	Para i<-1 Hasta 10 Hacer
		Escribir i,"dijite un numero:";
		Leer num;
		Si num=0 Entonces
			conteo_neutro <- conteo_neutro+1;
		SiNo
			Si num>0 Entonces
				conteo_positivos <- conteo_positivos+1;
			SiNo
				conteo_negativos <- conteo_negativos+1;
			FinSi
		FinSi
	FinPara
	Escribir "la cantidad de positivos es: ",conteo_positivos;
	Escribir "la cantidad de negativos es: ",conteo_negativos;
	Escribir "la cantidad de neutros es: ",conteo_neutro;
FinProceso
