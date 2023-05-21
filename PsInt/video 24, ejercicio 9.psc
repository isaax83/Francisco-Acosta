// ejercicio 3: Un maestro desea saber que porcentaje de hombres y que
// porcentaje de mujeres hay en un grupo de estuadiantes
Proceso ejercicio3
	Definir num_hombres,num_mujeres Como Entero;
	Definir total_estudiantes Como Entero;
	Definir porcenjateh,porcentajem Como Real;
	Escribir 'dijite el numero de hombres: ';
	Leer num_hombres;
	Escribir 'dijite el numero de mujeres: ';
	Leer num_mujeres;
	total_estudiantes <- num_hombres+num_mujeres;
	porcenjateh <- num_hombres/total_estudiantes*100;
	porcentajem <- num_mujeres/total_estudiantes*100;
	Escribir 'el porcentaje de hombres es: ',porcenjateh,'%';
	Escribir 'el porcentaje de mujeres es: ',porcentajem,'%';
FinProceso
