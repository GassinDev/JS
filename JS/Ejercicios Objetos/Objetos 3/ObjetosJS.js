// Ejercicio 1

function NewPerson(name, surname, age) {
    var NewPerson = {
        name: name,
        surname: surname,
        age: age,
    };

    return NewPerson;
}

// Ejercicio 2

function dataOBJ() {
    function Ropa(articulo, talla, cantidad) {
        this.articulo = articulo,
            this.talla = talla,
            this.cantidad = cantidad;
    }

    var articuloHTML = document.getElementById("articulos").value;
    var tallaHTML = document.getElementById("talla").value;
    var cantidadHTML = document.getElementById("cantidad").value;

    nuevaROPA = new Ropa(articuloHTML, tallaHTML, cantidadHTML);
    // console.log(nuevaROPA);
    Agregar();
}

var Inventario = [];

function Agregar() {
    Inventario.push(nuevaROPA);
    console.log(Inventario);
    document.getElementById("table").innerHTML += '<tr><td>' + nuevaROPA.articulo + '</td><td>' + nuevaROPA.talla + '</td><td>' + nuevaROPA.cantidad + '</td></tr>';
}

function Eliminar() {
    Inventario.pop(nuevaROPA)
    document.getElementById("table").deleteRow(-1);
    console.log(Inventario);
}

// Ejerccio 3

function Estudiantes() {
    function NewStudent(Nombre, edad, Nivel_Ingles, clase) {
        this.Nombre = Nombre,
            this.edad = edad,
            this.Nivel_Ingles = Nivel_Ingles;
        this.clase = clase;
    };

    var NombreHTML = document.getElementById("Alumno").value;
    var EdadHTML = document.getElementById("AlumnoEdad").value;
    var Nivel_InglesHTML = document.getElementById("Nivel_Ingles").value;
    var claseHTML = document.getElementById("Clase").value;

    NuevoEstudiante = new NewStudent(NombreHTML, EdadHTML, Nivel_InglesHTML, claseHTML)

    AgregarEst();
}

ArrayEstudiantes = [];

DAW1 = [];

DAW2 = [];

ASIR1 = [];

ASIR2 = [];

OtrasClases = [];

function AgregarEst() {
    ArrayEstudiantes.push(NuevoEstudiante);

    if (NuevoEstudiante.clase == "DAW1") {
        DAW1.push(NuevoEstudiante);
    }
    else {
        if (NuevoEstudiante.clase == "DAW2") {
            DAW2.push(NuevoEstudiante);
        }
        else {
            if (NuevoEstudiante.clase == "ASIR1") {
                ASIR1.push(NuevoEstudiante);
            }
            else {
                if (NuevoEstudiante.clase == "ASIR2") {
                    ASIR2.push(NuevoEstudiante);
                }
                else {
                    OtrasClases.push(NuevoEstudiante);
                }
            }
        }
    }

    console.log(ArrayEstudiantes);
}

function EliminarEst() {
    ArrayEstudiantes.pop(NuevoEstudiante)
    console.log(ArrayEstudiantes);
}

function AddClase() {
    var x = document.getElementById("Clase");
    var option = document.createElement("option");
    option.text = document.getElementById("nuevaclase").value;
    x.add(option);
}