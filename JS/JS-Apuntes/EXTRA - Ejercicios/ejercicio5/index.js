function cargarDatos(){
	
	var nombre = prompt("Ingrese su nombre: ", "");
	var apellido = prompt("Ingrese su apellido: ", "");
	var saldo = prompt("Ingrese el saldo: ", "");
	var cuenta1 = new CuentaBancaria(nombre,apellido,saldo);
	cuenta1.mostrarDatos();
}
function validar(){

}

function CuentaBancaria (nombre,apellido,saldo) {
	//alert("hola");
	this.nombreTitular = nombre;

	this.apellidosTitular = apellido;

	this.saldo = saldo;

	this.mostrarDatos = function () {
		var msg = 'Ha creado una cuenta bancaria ';

	    msg = msg + 'Los datos de la cuenta son Nombre: ' + this.nombreTitular;

	    msg = msg + '; Apellidos: ' + this.apellidosTitular + '; Saldo: ' + this.saldo;

	    alert(msg);

	};
}