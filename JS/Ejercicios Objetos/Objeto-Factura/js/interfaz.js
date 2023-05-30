var $COMAPNY = document.getElementById("compañia");
var $CLIENT = document.getElementById("cliente");
var $CLIENT_FORM = document.getElementById("clienteForm");
var $CLIENT_NOMBRE = document.getElementById("nombre");
var $CLIENT_CIF = document.getElementById("cif");
var $CLIENT_DIRECCION = document.getElementById("direccion");
var $TABLE_BODY = document.getElementById("tableBody");
var cliente;
var orden;
var invoice;
var total;


function dataToHTML(obj, element) {

    element.innerHTML = `
        <dl>
            <dt>Nombre</dt>
            <dd>${obj.nombre}</dd>

            <dt>CIF</dt>
            <dd>${obj.cif}</dd>

            <dt>Dirección</dt>
            <dd>${obj.direccion}</dd>
        </dl>
    `;

}

dataToHTML(compañia, $COMAPNY);

function handleSubmit(e) {

    e.preventDefault(); 

    var nuevoNombre = $CLIENT_NOMBRE.value;
    var nuevoCIF = $CLIENT_CIF.value;
    var nuevaDireccion = $CLIENT_DIRECCION.value;

    cliente = Cliente(nuevoNombre, nuevoCIF, nuevaDireccion);
    dataToHTML(cliente, $CLIENT);

}


$CLIENT_FORM.addEventListener('submit', handleSubmit);

function productsToHTML(productos) {

    for (var j = 0; j < productos.length; j++) {
        newRow(productos[j]);
    }

}

function newRow(producto) {

    var newRow = `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><input type="number" min="0" value="0" id="${producto.nombre}"></td>    
        </tr>
    `;

    $TABLE_BODY.innerHTML += newRow;

}

productsToHTML(productos);