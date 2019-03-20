const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`) // dentro de uma epressao, pode ccolocar uma funcao

const up = texto => texto.toUpperCase() //colocar tudo maiusculo
console.log(`Ei... ${up('cuidado')}`)