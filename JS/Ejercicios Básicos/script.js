function CantidadPago() {

    let precio, cantidad, total;

            precio = prompt('Precio del articulo')
            cantidad = prompt('Cantidad de ese articulo');
            total = parseInt(precio) * parseInt(cantidad);
            document.write('debe pagar ' + total)

}


function AñadirTexto() {

        var texto = document.getElementById("texto")
        var mostrar = document.getElementById("mostrar texto")

        mostrar.innerHTML += texto.value + " ";
   
}


function Mayor(){

    let number1, number2, mayor;
    
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);

    if(number1 > number2){

        alert("El número " + number1 + " es mayor que el número " + number2)
        

    }else{

        alert("El número " + number2 + " es mayor que el número " + number1)
       
    }
}



function ListaDeNombresDesordenada(evt) {
    evt.preventDefault();
  
    let nombre = document.getElementById("nombre").value;
  
    
      let opcion = "<li> " + nombre + "</li>";
  
      let lista = document.getElementById("listadenombres");
  
      lista.innerHTML += opcion;
  
      
    }

function DimeLaOpcion(){


  if(document.getElementById('opcion1').checked){

    window.alert("Elegiste la opcion 1");
  }
  if(document.getElementById('opcion2').checked){

    window.alert("Elegiste la opcion 2");
  }
  if(document.getElementById('opcion3').checked){

    window.alert("Elegiste la opcion 3");
  }
}

function Funcion6(){

  let number1, number2, suma, diferencia, producto, division;

        number1 = parseFloat(document.getElementById("n1").value);
        number2 = parseFloat(document.getElementById("n2").value);
  
 
        if (number1 > number2) {

            suma = number1 + number2;
            diferencia = numero1 - number2;

            document.write('La suma es ' + suma); document.write('<br>');   
            document.write('La diferencia es ' + diferencia);

        } else {

            producto = number1 * number2;
            division = number1 / number2;

            document.write('El producto es ' + producto); document.write('<br>');
            document.write('La división del primero con el segundo es' + division);
        }
}

function Funcion7 (){

        let number1, number2, number3, promedio, suma;

        number1 = parseFloat(document.getElementById("dato1").value);
        number2 = parseFloat(document.getElementById("dato2").value);
        number3 = parseFloat(document.getElementById("dato3").value);
    

        suma = number1 + number2 + number3;
        promedio = suma / 3;

        if(promedio < 5){

            window.alert("Repetidor"); 
        }
        if(7 >= promedio && promedio >= 5 ){

            window.alert("Superado"); 
        }
        if(promedio > 7){

            window.alert("Promocionado"); 
        }

}

function Funcion8 (){

    let number1, number2, number3;

    number1 = parseFloat(document.getElementById("dat1").value);
    number2 = parseFloat(document.getElementById("dat2").value);
    number3 = parseFloat(document.getElementById("dat3").value);


    if(number1 > number2 && number1 > number3){

        window.alert("El mayor es " + number1); 
    }
    if(number2 > number1 && number2 > number3){

        window.alert("El mayor es " + number2); 
    }
    if(number3 > number1 && number3 > number2){

        window.alert("El mayor es " + number3); 
    }

}


function Funcion9 (){

    let number1;

    number1 = parseInt(document.getElementById("da1").value);

    if(number1 > 0){

        window.alert("Positivo"); 
    }else{


        if(number1 == 0){

            window.alert("Cero"); 

            
        }else{

            if(number1 < 0 ){
    
                window.alert("Negativo"); 
            }

        }
        

    }
    

}


function Funcion10 (){

    let number;
    
    number = parseInt(document.getElementById("d1").value);
  

    if(number >= 0 &&  number < 10)
    {

      alert("Tiene un digito");

     }
       else if (number > 10 && number <99)
       {

         alert("Tiene dos digitos");

       }

     else if(-99 > number){

         alert("Tiene mas de dos digitos");

       }else if(number < 0 &&  number > -10){

        alert("Tiene un digito");

       }else if(number < -10 && number > -99){

        alert("Tiene dos digitos");

       }

}



function Funcion11(){

    let number;
    
    number = parseInt(document.getElementById("dq1").value);
  

    if(number >= 0 &&  number < 10)
    {

      alert("Tiene una cifra");

     }
       else if (number > 10 && number < 99)
       {

         alert("Tiene dos cifras");

       }

     else if(99 <= number && 999 >= number){

         alert("Tiene tres cifras");

       }else {

        alert("Tiene más de tres cifras");

       }
        
}


function Funcion12(){

    let dia1, mes2, año3;

    dia1 = parseInt(document.getElementById("dia1").value);
    mes2 = parseInt(document.getElementById("mes2").value);
    año3 = parseInt(document.getElementById("año3").value);

    if(dia1 == 25 && mes2 == 12){

        window.alert("El dia " + dia1 + "/" + mes2 + "/" + año3 + " es Navidad.")
    }else{

        window.alert("El dia " + dia1 + "/" + mes2 + "/" + año3 + " no es Navidad.")

    }


}

function Funcion13(){

    let number1, number2, number3,resultado;

    number1 = parseInt(document.getElementById("f1").value);
    number2 = parseInt(document.getElementById("f2").value);
    number3 = parseInt(document.getElementById("f3").value);

    if(number1 == number2 && number1 == number3){

        resultado = (number1 + number2 ) * number3;

        window.alert(resultado)
    }else{

        window.alert("No son iguales no tengo nada que hacer")

    }

}


function Funcion14(){

    let total, acertadas, porcentaje;

    total = parseInt(document.getElementById("hw1").value);
    acertadas = parseInt(document.getElementById("hw2").value);

    porcentaje = acertadas * 100 / total;


    if(porcentaje >= 90){

        window.alert("Nivel Superior: "+ porcentaje + "%");

    }else if(porcentaje >= 75 && porcentaje < 90){

        window.alert("Nivel Medio: "+ porcentaje + "%");

    }else if(porcentaje >= 50 && porcentaje < 75){

        window.alert("Nivel Regular: "+ porcentaje + "%");

    }else{

        window.alert("Fuera de Nivel: "+ porcentaje + "%");

    }
}

function Funcion15() {

    let sueldo, antiguedad, nuevosueldo;

    sueldo = parseInt(document.getElementById("ht1").value);
    antiguedad = parseInt(document.getElementById("ht2").value);

    if(sueldo < 1000 && antiguedad >= 10){

        nuevosueldo = sueldo * 1.20;
        window.alert("El sueldo sería de " + nuevosueldo);

    }else if(sueldo < 1000 && antiguedad < 10){

        nuevosueldo = sueldo * 1.05;
        window.alert("El sueldo sería de " + nuevosueldo);

    }else if(sueldo >= 1000){

        window.alert("El sueldo sería de " + sueldo);

    }


}


function Funcion16(){

    let marca, modelo;

    marca = document.getElementById("coche1").value;
    modelo = document.getElementById("coche2").value;

    if (marca == "Renault" ){

        window.alert("Tiene un descuento de 15%");
    }else if (marca == "Ford" && modelo == "Fiesta" ){

        window.alert("Tiene un descuento de 7%");

    }else if (marca == "Ford" && modelo == "Focus" ){

        window.alert("Tiene un descuento de 10%");
    }else {

        window.alert("Tiene un descuento de 5%");
    }

}


function Funcion17(){

    let mes, año;

    mes = parseInt(document.getElementById("mes").value);
    año = parseInt(document.getElementById("año").value);

    if ((año % 4 == 0) && ((año % 100 != 0) || (año % 400 == 0))){

        if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){

            window.alert("Tiene 31 días");

        }else if(mes == 2){

            window.alert("Tiene 29 días")
        }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){

            window.alert("Tiene 30 días")
        }

        
    }else{

        if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){

            window.alert("Tiene 31 días");

        }else if(mes == 2){

            window.alert("Tiene 28 días")
        }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){

            window.alert("Tiene 30 días")
        }
    }
	

}
  
  
function Funcion18(){

    let altura, edad, peso;

    altura = parseFloat(document.getElementById("datoaltura").value);
    edad = parseFloat(document.getElementById("datoedad").value);
    datosexo = document.getElementById("sexo").value;

    if(datosexo == "h" || datosexo == "H"){

        peso = (50 + ((altura - 150) / 4) * 3 + (edad - 20) - 4) * 0.9;
        
        window.alert(peso);
    }else if(datosexo == "m" || datosexo == "M"){

        peso = 50 + ((altura - 150) / 4) * 3 + (edad - 20) - 4;
        window.alert(peso);

    }
}
  
function Funcion19(){

    let dinero, dado, apuesta, numero;

    while(dinero > 0 && apuesta > 0){

        dado = Math.floor(Math.random() * 6) + 1;

    numero = parseInt(document.getElementById("numero1").value);
    apuesta = parseFloat(document.getElementById("apuesta2").value);

    document.write("Ha salido el " + dado);

    if(numero == dado){

        dinero = dinero + apuesta*2;
        window.alert("Has ganado " + dinero + "€")
    }else {

        dinero = dinero - apuesta;
        window.alert("Has perdido " + apuesta + "€" + " , ahora te quedan " + dinero + "€")
    }

    if(dinero == 0){

        window.alert("Te quedaste sin dinero.")
        break;
    }else if(dinero >= 200){

        window.alert("Has ganado el juego, te llevaste un dinero bueno eeeen")
        break;
    }
    } 
}

function Funcion20(){

    let bi, iva, peso, precio;

    bi = parseFloat(document.getElementById("bi1").value);
    iva = document.getElementById("iva2").value;
    peso = parseFloat(document.getElementById("peso3").value);

    

    if (iva == "normal"){

        if (peso < 1){

            precio = bi + (bi * 0.21) + 3;
            window.alert("El precio es " + precio + "€");

        }else if(peso < 3 && peso >= 1){

            precio = bi + (bi * 0.21) + 5;
            window.alert("El precio es " + precio + "€");

        }else if(peso >= 3){

            precio = bi + (bi * 0.21) + 10;
            window.alert("El precio es " + precio + "€");

        }

        
    }

    if (iva == "reducido"){

        if (peso < 1){

            precio = bi + (bi * 0.1) + 3;
            window.alert("El precio es " + precio + "€");

        }else if(peso < 3 && peso >= 1){

            precio = bi + (bi * 0.1) + 5;
            window.alert("El precio es " + precio + "€");

        }else if(peso >= 3){

            precio = bi + (bi * 0.1) + 10;
            window.alert("El precio es " + precio + "€");

        }

        
    }
}


