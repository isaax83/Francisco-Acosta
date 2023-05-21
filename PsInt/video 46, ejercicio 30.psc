//dada las horas trabajadas de 5 personas y la tarifa de pago, calcular
//el salario y la sumatoria de todos los salarios
//entrada: ingresar cantidad de trabajadores y la tarifa de pago
//Proceso :horas*tarifapago; sumatotal+salario
//salida: sumatotal
Proceso horastrabajadas
	Definir numtrabajadores, i, tarifapago, horas, salario, sumatotal como entero ;
	//entrada: ingresar cantidad de trabajadores y la tarifa de pago
	Escribir " ingrese la cantidad de trabajadores" ;
	Leer numtrabajadores;
	i<-1;
	sumatotal<-0;
	Escribir " ingrese la tarifa" ;
	Leer tarifapago;
	//Proceso :horas*tarifapago; sumatotal+salario
	mientras i<=numtrabajadores Hacer
		Escribir " ingrese las horas trabajadas del " , i , " trabajador" ;
		Leer horas;
		salario<-horas*tarifapago;
		Escribir " el salario del " , i , " trabajador es  "  , salario;
		sumatotal<-sumatotal+salario;
		i<-i+1;
		
		
		
	FinMientras
	//salida: sumatotal
	Escribir " el salario total de los trabajadores es " , sumatotal;
	
	
FinProceso


