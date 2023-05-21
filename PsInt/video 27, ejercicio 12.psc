// un alumno desea saber cuál será su calificacion final en la materia de Algoritmo.
// dicha calificacion de compone de los siguientes porcentajes:
// 55   MOD   del promedio de sus calificaciones parciales.
// 30   MOD    de la calificacion del examen FinAlgoritmo
// 15   MOD   de la calificacion de un trabajo final.
Proceso ejerccio6
	Definir parcial1,parcial2,parcial3,promediop,notasparciales Como Real;
	Definir examen_final,notaexamen Como Real;
	Definir notatrabajo,notafinaltrabajo Como Real;
	Definir notafinal Como Real;
	Escribir 'dijite las tres notas de los parciales: ';
	Leer parcial1,parcial2,parcial3;
	promediop <- (parcial1+parcial2+parcial3)/3;
	notasparciales <- promediop*0.55;
	Escribir 'dijite la nota del examen final: ';
	Leer examen_final;
	notaexamen <- examen_final*0.3;
	Escribir 'dijite la nota del trabajo final: ';
	Leer notatrabajo;
	notafinaltrabajo <- notatrabajo*0.15;
	notafinal <- notasparciales+notaexamen+notafinaltrabajo;
	Escribir 'la calificacion final es: ',notafinal;
FinProceso
