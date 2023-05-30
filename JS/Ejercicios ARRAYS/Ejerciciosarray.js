function Cargar(){
    document.getElementById("array").value;
    }
    function Reiniciar(){

        location.reload();

    }

    function Calcular(){

    let a, mayor = - Infinity, menor = + Infinity, suma = 0, media = 0;
    
    a = document.getElementById("array").value.split(/,/);
    
    

    for(i = 0; i < a.length; i++)
        {
            suma=(parseInt(a[i])) + suma;
        }
    
            media=suma/a.length;
    
    for(i = 0; i < a.length; i++)
        {
            if(parseInt(a[i]) < menor) menor=a[i];
        }
    
    for(i = 0; i < a.length; i++)
        {
            if(parseInt(a[i]) > mayor) mayor= a[i];
        }

        document.write("· La suma es " + suma + "<br>");
        
        document.write("· La media es " + media + "<br>");
        
        document.write("· El mayor es " + mayor + "<br>");
        
        document.write("· El menor es " + menor);
    
    }

    function Cargar1(){
        document.getElementById("array1").value;
        }
    
    function Cargar2(){

        for(i = 0; i < a.length; i++){

            document.getElementById("array2").value;
        }
        
         }

    function Concatenar(){

        let a, b, c, array = [];

        a = document.getElementById("array1").value.split(/,/);
        b = document.getElementById("array2").value.split(/,/);

        for( i = 0; i < a.length; i++ ){

            array.push(a[i]);
            array.push(b[i]);
        }

        document.getElementById("c").innerHTML = array;
    }


    function Cargar10(){
        document.getElementById("a1").value;
        }
    
    function Cargar20(){
        
        document.getElementById("a2").value;
         }
            
                                                         
         function ConcatenarDiff(){

            let a, b, array = [];
    
            a = document.getElementById("a1").value.split(/,/);
            b = document.getElementById("a2").value.split(/,/);
    
            if(a.length > b.length){

                for(i = 0; i < b.length; i++){

                    array.push(a[i]);
                    array.push(b[i]);
                }

                for(i = 0; i < a.length; i++){

                    array.push(a[i]);
                }
            }else{

                for(i = 0; i < a.length; i++){

                    array.push(b[i]);
                    array.push(a[i]);
                }

                for(i = 0; i < b.length; i++){

                    array.push(b[i]);
                }
            }
    
            document.getElementById("a3").innerHTML=array;
        }   

        function CuentaPalabras(){

            let a, cuantas, primera, ultima;

            a = document.getElementById("a0").value.split(" ");

            cuantas = a.length;

            primera = a[0];

            ultima = a[a.length - 1];

            document.getElementById("a4").innerHTML="Número de palabras: " + cuantas;
            document.getElementById("a5").innerHTML="Primera palabra: " + primera;
            document.getElementById("a6").innerHTML= "Última palabra: " + ultima;

        }

    

    function FibonacciFinito(){

        let fibo = new Array();

        fibo[0]=1;
        fibo[1]=1;

        for(i = 2; i < 20; i++)
        {
            fibo[i] = fibo[i-1] + fibo[i-2];

            document.write(fibo[i] + ",");

        }

       
    }	

    function Iterativa(){

        let a = []
        let limit;

        limit = parseInt(document.getElementById("q").value);

        for (let i = limit; i > 0; i--) {

          a.push(i)
          document.write(parseInt(a[i]));
          
        }
      
       
      
    
    }



