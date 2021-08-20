//Codigo para el cuadrado
console.group ("Cuadrado");
//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden :"+ladoCuadrado + "cm")

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado()
//console.log ("El perimetro del cuadrado es :"+perimetroCuadrado+ "cm")

function areaCuadrado(lado){
    return lado * lado;
}

//console.log ("El area del cuadrado es :"+areaCuadrado+ "cm")

console.groupEnd();



//Codigo para el triangulo
console.group ("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log (
//     "Los lados del triangulo miden :"
//     +ladoTriangulo1 + "cm, "
//     +ladoTriangulo2 + "cm, "
//     +baseTriangulo + "cm, " )
// console.log ("la altura del triangulo es :"+alturaTriangulo+ "cm")

function perimetroTriangulo (lado1, lado2, base){
    return (lado1+lado2+base);
}
//console.log ("El perimetro del cuadrado es :"+perimetroTriangulo+ "cm")

function areaTriangulo (base, altura){
    return (base*altura)/2;
}
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log ("El area del triangulo es :"+areaTriangulo+ "cm")

console.groupEnd();



    //Codigo para el Circulo
console.group ("Circulo");

// const radioCirculo = 4;
// console.log ("El radio del circulo es :"+radioCirculo+ "cm")
// const diametroCirculo = radioCirculo*2;
// console.log ("El diametro del circulo es :"+diametroCirculo+ "cm")
const PI = Math.PI;
// console.log ("El valor de PI es :"+PI+ "cm")


function diametroCirculo (radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro =diametroCirculo(radio);
    return diametro * PI
}
// const perimetroCirculo = diametroCirculo* PI;
// console.log ("El perimetro del circulo es :"+perimetroCirculo+ "cm")

function areaCirculo(radio){
    return (radio * radio)*PI;
}
// const areaCirculo = (radioCirculo * radioCirculo)* PI
// console.log ("El area del circulo es :"+areaCirculo+ "cm")

console.groupEnd();

//Interactuando con  perimetro y area cuadrado


function calcularPerimetroCuadrado () {
    const input = document.getElementById ("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert(perimetro);

}

function calcularAreaCuadrado () {
    const input = document.getElementById ("InputCuadrado");
    const value = input.value;

    const area = perimetroCuadrado (value);
    alert(area);

}




//Interactuando con  perimetro y area triangulo

function calcularPerimetroTriangulo () {
    const input1 = document.getElementById ("InputTrianguloLado1");
    const value1 = input1.value;
    const input2 = document.getElementById ("InputTrianguloLado2");
    const value2 = input2.value;
    const input3 = document.getElementById ("InputTrianguloBase");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo (value1, value2,value3);
    alert(perimetro);
}

function calcularAreaTriangulo () {
    const input3 = document.getElementById ("InputTrianguloBase");
    const value3 = input3.value;
    const input4 = document.getElementById ("InputTrianguloAltura");
    const value4 = input4.value;

    const area = areaTriangulo (value3, value4);
    alert(area);
}


//Interactuando con  perimetro y area circulo


function calcularPerimetroCirculo () {
    const input5 = document.getElementById ("InputCirculo");
    const value5 = input5.value;

    const perimetro = perimetroCirculo (value5);
    alert(perimetro);

}

function calcularAreaCirculo () {
    const input5 = document.getElementById ("InputCirculo");
    const value5 = input5.value;

    const area = areaCuadrado (value5);
    alert(area);

}