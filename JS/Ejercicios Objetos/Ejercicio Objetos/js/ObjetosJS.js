//--------------- Ejercicio 1 ----------------------//

function NewPerson(name, surname, age) {
    var NewPerson = {
        name: name,
        surname: surname,
        age: age,
    };

    return NewPerson;
}

//--------------- Ejercicio 2 ----------------------//

function dataOBJ() {
    function Clothe(article, talla, quantity) {
        this.article = article,
            this.talla = talla,
            this.quantity = quantity;
    }

    var articleHTML = document.getElementById("article").value;
    var tallaHTML = document.getElementById("talla").value;
    var quantityHTML = document.getElementById("quantity").value;

    NuevaRopa = new Clothe(articleHTML, tallaHTML, quantityHTML);
    Add();
}

var Inventario = [];

function Add() {
    Inventario.push(NuevaRopa);
    console.log(Inventario);
    document.getElementById("table").innerHTML += '<tr><td>' + NuevaRopa.article + '</td><td>' + NuevaRopa.talla + '</td><td>' + NuevaRopa.quantity + '</td></tr>';
}

function Delete() {
    Inventario.pop(NuevaRopa)
    document.getElementById("table").deleteRow(-1);
    console.log(Inventario);
}

//--------------- Ejercicio 3 ----------------------//

function Students() {
    function NewStudent(Name, StudentAge, Level_English, clase) {
        this.Name = Name,
        this.StudentAge = StudentAge,
        this.Level_English = Level_English;
        this.clase = clase;
    };

    var NombreHTML = document.getElementById("Student").value;
    var EdadHTML = document.getElementById("AgeStudent").value;
    var Level_EnglishHTML = document.getElementById("Level_English").value;
    var claseHTML = document.getElementById("Clase").value;

    NuevoEstudiante = new NewStudent(NombreHTML, EdadHTML, Level_EnglishHTML, claseHTML)

    AddEst();
}

ArrayEstudiantes = [];

DAW1 = [];

DAW2 = [];

ASIR1 = [];

ASIR2 = [];

OtrasClases = [];

function AddEst() {
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

function DeleteEst() {
    ArrayEstudiantes.pop(NuevoEstudiante)
    console.log(ArrayEstudiantes);
}

function AddClase() {
    var x = document.getElementById("Clase");
    var option = document.createElement("option");
    option.text = document.getElementById("nuevaclase").value;
    x.add(option);
}