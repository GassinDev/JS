var $PERSON = document.getElementById("person");
var $PERSON_FORM = document.getElementById("personForm");
var $PERSON_NAME = document.getElementById("name");
var $PERSON_SURNAME = document.getElementById("surname");
var $PERSON_AGE = document.getElementById("age");
var person;

function dataToHTML(obj, element) {

    element.innerHTML += `
        <dl>
            <dt>Nombre</dt>
            <dd>${obj.name}</dd>

            <dt>Apellido</dt>
            <dd>${obj.surname}</dd>

            <dt><strong>Edad</strong></dt>
            <dd>${obj.age}</dd>
        </dl>
    `;

}

function handleSubmitPerson(e) {

    e.preventDefault(); 

    var newName = $PERSON_NAME.value;
    var newSURNAME = $PERSON_SURNAME.value;
    var newAGE = $PERSON_AGE.value;

    person = NewPerson(newName, newSURNAME, newAGE);
    dataToHTML(person, $PERSON);

}

$PERSON_FORM.addEventListener('submit', handleSubmitPerson);


