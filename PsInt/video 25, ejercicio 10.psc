// ejerccio 4: un profesor prepara tres cuestionarios para la evaluacion 
// A, B y C, se sabe que se tarde 5 minutos en revisar el cuestionario A,
// 8 en revisar el cuestionario B y 6 en el C. la cantidad de examenes de cada
// tipo se entraron por teclado. ¿cuantas horas y cuantos minutos se tardara en
// revisar todas las evaluaciones
Proceso ejerccio4
	Definir cantidadA,cantidadB,cantidadC Como Entero;
	Definir tiempoA,tiempoB,tiempoC Como Entero;
	Definir total_tiempo Como Entero;
	Definir horas,minutos Como Entero;
	Escribir 'dijite la cantidad del cuestionario A: ';
	Leer cantidadA;
	Escribir 'dijite la cantidad del cuestionario B: ';
	Leer cantidadB;
	Escribir 'dijite la cantidad del cuestionario C: ';
	Leer cantidadC;
	// calcular los minutos que se tarda en calcular por coda cuestionaro
	tiempoA <- cantidadA*5;
	tiempoB <- cantidadB*8;
	tiempoC <- cantidadC*6;
	// calculamos el tiempo total que le toma revisar todos los cuestionarios
	total_tiempo <- tiempoA+tiempoB+tiempoC;
	// calculamos las horas y los minutos
	horas <- trunc(total_tiempo/60);
	minutos <- total_tiempo MOD 60;
	Escribir 'se tardara ',horas,' horas ',minutos,' minutos';
FinProceso
