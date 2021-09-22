function imprimir()
{
document.write("<h1>Mi primera funcion en js</h1>")
}

        

//imprimir();

//Una funcion llamando a otra funcion;
function llamado(){
    imprimir();
}

llamado();

var num_uno= 3.5;
var num_dos= 7.6;

function sumar(x,y){
    document.write(x+y);

}

function multiplicar(x,y){
    document.write(x*y);

}
function dividir(x,y){
    document.write(x/y);

}
document.write("<br> el producto de "+num_uno+" con "+num_dos+" es ");
multiplicar(num_uno,num_dos);
document.write("<br> el cociente de "+num_uno+" con "+num_dos+" es ");
dividir(num_uno,num_dos);
document.write("<br> la suma de de "+num_uno+" con "+num_dos+" es ");
sumar(num_uno,num_dos);
document.write("</h1>");

// con retorno

function sumar1(x,y){
  return x+y;

}

function multiplicar1(x,y){
   return x*y;

}
function dividir1(x,y){
    return x/y;

}

var sum = sumar1(num_uno,num_dos);
var prod = multiplicar1(num_uno,num_dos);
var coc=dividir1(num_uno,num_dos);
document.write("<hr>")
document.write("<br> el producto de "+num_uno+" con "+num_dos+" es "+ (prod).toFixed(2));
document.write("<hr>")
document.write("<br> el cociente de "+num_uno+" con "+num_dos+" es "+(coc).toFixed(2));
document.write("<hr>")
document.write("<br> la suma de de "+num_uno+" con "+num_dos+" es "+sum);
document.write("<hr>")

var pi=Math.PI;
var lado=5.7;
var altura = 9.8;
var radio= 3.9;

function area_circ(r){
    return pi*Math.pow(r,2);
}

area_circ(radio);
function area_cuadrado(lado){
    return Math.pow(lado,2);
}

function area_triangulo(b,h){
    return b*h/2;
}

function vol_cubo(lado){
    return Math.pow(lado,3);
}
function vol_cilindro(rad,alt){
    return area_circ(rad)*alt;
}

function vol_esfera(rad){
    return (4/3)*pi*Math.pow(rad,3);
}

var ar_circ= area_circ(radio);// se captura el valor en una variable 
document.write("<h1>",(ar_circ).toFixed(1)+" Este es el area del circulo de radio "+ radio);

var ar_cu=area_cuadrado(lado);
document.write("<h1>","El area del cuadrado de lado "+lado+ " es: "+(ar_cu).toFixed(2));

var ar_tri=area_triangulo(lado,altura);
document.write("<br> El area del triangulo de base "+lado+ " y altura "+ altura+" es: "+(ar_tri).toFixed(2));

var vol_cu=vol_cubo(lado);
document.write("<br> El volumen del cubo de lado "+lado+ " es: "+(vol_cu).toFixed(2));

var vol_cil=vol_cilindro(radio,altura);
document.write("<br> El volumen del cilindro de radio "+radio+ " y altura "+ altura+" es: "+(vol_cil).toFixed(2));

var vol_es=vol_esfera(radio);
document.write("<br> El volumen de la esfera de radio  "+radio+ " es: "+(vol_es).toFixed(2));