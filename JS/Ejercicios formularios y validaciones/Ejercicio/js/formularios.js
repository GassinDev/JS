function EJERCICIO1() {

    const $FORM = document.getElementById('Ejercicio1');
    const $NAME = document.getElementById('name');
    const $SURNAME = document.getElementById('surname');
    const $EMAIL = document.getElementById('email');
    const $PASSWORD = document.getElementById('password');
    const $COMMENT = document.getElementById('comment');
    const $ACEPTED = document.getElementById('conditions');

    function handleSubmit(e) {
        e.preventDefault();

        const name = $NAME.value;
        const surname = $SURNAME.value;
        const email = $EMAIL.value;
        const password = $PASSWORD.value;
        const comment = $COMMENT.value;
        const acepted = $ACEPTED.checked;

        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else {
            if (email == false || isValidEmail(email) == false) {
                alert('El email debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por un @ y un ".algo"');
            }
            else {
                if (comment == false || isValidComent(comment) == false) {
                    alert('El comentario tiene que tener un formato válido : \n -Debe estar relleno \n -Debe de tener un total de 50 caracteres');
                }
                else {
                    if (isValidPassword(password) == false) {
                        alert('El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito');
                    }
                }
            }
        }

    }

    function isValidName(name) {
        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(name);
    }

    function isValidEmail(email) {
        const validacion = /^(.+\@.+\..+)$/;
        return validacion.test(email);
    }

    function isValidPassword(password) {
        const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
        return validacion.test(password);
    }

    function isValidComent(comment) {
        const validacion = /^[\s\S]{1,50}$/;
        return validacion.test(comment);
    }

    $FORM.addEventListener('submit', handleSubmit);
}

function EJERCICIO2() {

    const $FORM = document.getElementById('Ejercicio2');
    const $NAME = document.getElementById('name2');
    const $SURNAME = document.getElementById('surname2');
    const $DNI = document.getElementById('NIF');
    const $PHONE = document.getElementById('telephone');
    const $COMMENTS = document.getElementById('comment2');
    const $TIME = document.getElementById('time');

    function handleSubmit(e) {
        e.preventDefault();

        const name = $NAME.value;
        const surname = $SURNAME.value;
        const DNI = $DNI.value;
        const telephone = $PHONE.value;
        const comment = $COMMENTS.value;
        const time = $TIME.value;

        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else {
            if (surname == false || isValidName(surname) == false) {
                alert('El apellido debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
            }
            else {
                if (DNI == false || isValidDNI(DNI) == false) {
                    alert('El DNI tiene que ser un valor válido')
                }
                else {
                    if (telephone == false || isValidPHONE(telephone) == false) {
                        alert('El número de teléfono tiene que ser válido')
                    }
                    else {
                        if (comment == false || isValidComent(comment) == false)
                            alert('El comentario tiene que tener un formato válido : \n -Debe estar relleno \n -Debe de tener un total de 250 caracteres');
                    }
                }
            }
        }

        function newPerson(name, surname, DNI, telephone, comment, time) {
            this.name = name;
            this.surname = surname;
            this.DNI = DNI;
            this.telephone = telephone;
            this.comment = comment;
            this.time = time;
        }

        nuevaPersona = new newPerson(name, surname, DNI, telephone, comment, time);
        console.log(nuevaPersona);
    }

    function isValidName(name) {
        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(name);
    }

    function isValidDNI(DNI) {
        const validacion = /^\d{8}\w{1}$/
        return validacion.test(DNI);
    }

    function isValidPHONE(PHONE) {
        const validacion = /^\+34\s\d{9}$/;
        return validacion.test(PHONE);
    }

    function isValidComent(comment) {
        const validacion = /^[\s\S]{1,250}$/;
        return validacion.test(comment);
    }

    $FORM.addEventListener('submit', handleSubmit);

}

function EJERCICIO3() {

    const $FORM = document.getElementById('Ejercicio3');
    const $NAME = document.getElementById('name3');
    const $SURNAME = document.getElementById('surname3');
    const $EMAIL = document.getElementById('email3');
    const $WEB = document.getElementById('web');

    function handleSubmit(e) {
        e.preventDefault();

        const name = $NAME.value;
        const surname = $SURNAME.value;
        const email = $EMAIL.value;
        const web = $WEB.value;

        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else {
            if (surname == false || isValidName(surname) == false) {
                alert('El apellido debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
            }
            else {
                if (email == false || isValidEmail(email) == false) {
                    alert('El email debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por un @ y un ".algo"');
                }
                else {
                    if (web == false || isValidWEB(web) == false) {
                        alert('La página web debe de tener un formato válido \n -No debe estar en blanco \n -Debe de tener el formato válido de una web')
                    }
                }
            }
        }

        function NewPerson(name, surname, email, web) {
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.web = web;
        }

        nuevaPersona = new NewPerson(name, surname, web, email);
        console.log(nuevaPersona);

    }

    function isValidName(name) {
        const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(name);
    }

    function isValidEmail(email) {
        const validacion = /^(.+\@.+\..+)$/;
        return validacion.test(email);
    }

    function isValidWEB(web) {
        const validacion = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)$/;
        return validacion.test(web);
    }

    $FORM.addEventListener('submit', handleSubmit);

}