// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN not a nunber
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) { // tratando o 'b', se nao for definifo o valor de 'b' ele fica com o valor 1
    return a + b
}

console.log(soma(2, 3)) 
console.log(soma(2))
