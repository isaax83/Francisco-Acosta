// ejercicio 2: hacer un programa para ingresar el radio de uncirculo y se
// reporte su área y la longitud de la circunferencia.
//entrada = radio
//Proceso = area <- pi*radio^2; lon <- 2*pi*radio;
//salida = area,lon
Proceso ejercicio2
	Definir radio,area,lon Como Real;
	Escribir 'dijite el valor de radio: ';
	Leer radio;
	area <- pi*radio^2;
	lon <- 2*pi*radio;
	Escribir 'el area de la circunferencia es ',area;
	Escribir 'la longitud es ',lon;
FinProceso
