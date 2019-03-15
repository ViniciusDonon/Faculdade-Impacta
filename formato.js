alert("Calculos do Vini");
alert("Você poderá escolher entre soma,multiplicação,subtração,divisão e tabuada")
alert("Lembre-se de escrever a operação corretamente")
var calculo = prompt("escolha uma operação");
/*var soma = parseInt(x)+parseInt(y);
var subtração = x-y;
var divisão = x/y;
var multiplicação = x*y;
var tabuada = i = 1;i <= 10; i++
*/

if (calculo =="soma"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado = parseInt(x) + parseInt(y);
    alert("o resultado é :"+ resultado);
    
}

if (calculo =="+"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado = parseInt(x) + parseInt(y);
    alert("o resultado é :"+ resultado);

}

if (calculo =="subtração"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado =(x-y);
    alert("o resultado é :"+ resultado);

}

if (calculo =="-"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado =(x-y);
    alert("o resultado é :"+ resultado);

}

if (calculo =="divisão"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado = (x/y);
    alert("o resultado é :"+ resultado);
}

if (calculo =="/"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado = (x/y);
    alert("o resultado é :"+ resultado);
}

if (calculo =="multiplicação"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado = (x*y);
    alert("o resultado é :"+ resultado);
}

if (calculo =="*"){
    var x = prompt("Digite um numero");
    var y = prompt("Digite outro numero");
    var resultado = (x*y);
    alert("o resultado é :"+ resultado);
}

if (calculo == "tabuada"){
    var tabuada = prompt ("Digite um numero")
    for (var i = 1;i <= 10; i++){
        alert(tabuada + 'x' + i + " = " + (tabuada*i));
}
}
if (calculo == "x"){
    var tabuada = prompt ("Digite um numero")
    for (var i = 1;i <= 10; i++){
        alert(tabuada + 'x' + i + " = " + (tabuada*i));
    }
}
 