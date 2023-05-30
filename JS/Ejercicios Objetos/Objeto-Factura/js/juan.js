// Datos de la compañia 

var compañia = {
    nombre: "Airbus",
    cif: "987654321",
    direccion: "Calle false 123"
};

// creación de un cliente

function Cliente(nombre, cif, direccion) {

    var NuevoCliente = {
        nombre: nombre,
        cif: cif,
        direccion: direccion
    };

    return NuevoCliente;
}

var cliente1 = Cliente("David", "123456789", "Vista Alegre 2...");

var producto1 = {
    nombre: "Producto 1",
    precio: 10
};

var producto2 = {
    nombre: "Producto 2",
    precio: 5.5
};

var producto3 = {
    nombre: "Producto 3",
    precio: 6.7
};

var producto4 = {
    nombre: "Producto 4",
    precio: 12
};

var productos = [producto1, producto2, producto3, producto4];


function Orden(){
    var NuevaOrden = [];
    var cantidad;

    for (var i = 0; i < productos.length; i++)
    {
        cantidad = parseInt(document.getElementById(productos[i].nombre).value);

        if(cantidad != 0) {
            NuevaOrden.push([productos[i], cantidad])
        }
    }
    Orden = NuevaOrden;
}


function Invoice(compañia, cliente, orden) {

    var newInvoice

    if  (compañia && cliente && orden)
    {
        newInvoice = {compañia: compañia, cliente:cliente, orden:orden}
    }

    invoice = newInvoice;

}

function processOrden(Orden){

    var NuevoTotal;
    var subtotal;

    if(Orden)
    {
        for(var k = 0; k<Orden.length;k++)
        {
            subtotal = getSubtotal(Orden[k]);
            NuevoTotal += subtotal;
        }
    }

    total = NuevoTotal;

}

function getSubtotal(pago) {
    
    var PreciPorUnidad = pago[0].precio;
    var cantidad = pago[1];

    return PreciPorUnidad * cantidad;
}