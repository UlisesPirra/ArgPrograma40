/**
 * Esto es lo primero que probe de JS
 * console.log("Hola Mundo");
let a,b,res;
a=10;
b=5;
res=a+b;
console.log("la suma es :" +res);
 */


   document.getElementById('btn').onclick = function() {
   console.log("Capturamos el elemento click");
   document.getElementById("demo").innerHTML = "El texto se cambio mediante programacion en JS";
   }