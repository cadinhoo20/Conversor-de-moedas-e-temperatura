function enviarDolar() {
    var numero_dolar = valorDolar.value
    var valorEmReal = numero_dolar * 4.70
    bloco.innerHTML = 'seu valor de ' + numero_dolar + ' dolares equivalem a ' + valorEmReal + ' Reais'

    if (numero_dolar == '') {
        alert('Valor Inválido!')
    }

}

function enviarTemp() {
    var numero_temp = valorTemp.value
    var valorEmFar = numero_temp * 1.8 + 32
    bloco2.innerHTML = 'seu valor de ' + numero_temp + ' graus Celsius equivalem a ' + valorEmFar + ' Fahrenheit'

    if (numero_temp == '') {
        alert('Valor Inválido!')
    }

}

/*
-----------REVISAO---------

variaveis var int let - float - string
alert - parseInt - parseFloat - prompt
operações + somar * multiplicar
// comentario inline
*/