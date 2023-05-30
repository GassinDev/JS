
//Dado un array, quitar los elementos no repetidos


let miArray=new Array();
miArray[0]=200;
miArray[1]=40;
miArray[2]=400;
miArray[3]=40;
miArray[4]=40;


let resultado=new Array();


for(i=0;i<miArray.length;i++)
{
    if (!(isUnique(miArray,miArray[i])))  resultado.push(miArray[i]);
    
}

function isUnique(arr, el) {
    let hasOne = false;
    for (let item of arr) {
        if (item === el) {
            if (hasOne) {
                return false;
            } else {
                hasOne = true;
            }
        }
    }
    return true;
}

document.write("El resultado de tu array es:")

for(i=0;i<resultado.length;i++) document.write( " "+resultado[i]);

