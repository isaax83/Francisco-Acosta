// ejercicio 5: Una tienda ofrece un descuento del 15 MOD  sobre el total de la
// compra y yun cliente desea saber cuanto deberia pagar finalmente por su compra.
Proceso ejercicio5
	Definir precio,descuento,precio_final Como Real;
	Escribir 'dijite el precio a pagar: ';
	Leer precio;
	descuento <- precio*0.15;
	precio_final <- precio-descuento;
	Escribir 'el precio a pagar es de: ',precio_final;
FinProceso
