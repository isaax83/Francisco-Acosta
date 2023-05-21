// determinar si un alumno aprueba o reprueba un curso sabiendo que aprobaria
// si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario
Proceso ejerccio2
	Definir nota1,nota2,nota3 Como Real;
	Definir promedio Como Real;
	Escribir 'ingrese las tres calificaciones: ';
	Leer nota1,nota2,nota3;
	promedio <- (nota1+nota2+nota3)/3;
	Si promedio>=70 Entonces
		Escribir 'el alumno esta aprobado con: ',promedio;
	SiNo
		Escribir 'el alumno reprobo con: ',promedio;
	FinSi
FinProceso
