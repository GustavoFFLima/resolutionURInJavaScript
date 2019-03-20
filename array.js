const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[1])
console.log(valores[4])

valores[4] = 10 // para add futuramentes
console.log(valores)
console.log(valores.length) // identifica quantos elementos contem

valores.push({id: 3}, false, true, 'teste')
console.log(valores)

console.log(valores.pop()) //retira o ultimo elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)