function compras(trabalho1, trabalho2) {
    const comprarSorvetes = trabalho1 || trabalho2 //tipo ou
    const comprarTv50 = trabalho1 && trabalho2 // tipo e
    const comprarTv32 = !!(trabalho1 ^ trabalho2) // tipo bitwise xor
    const comprarTv31 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvetes // operador unário

    return { comprarSorvetes, comprarTv50, comprarTv32,comprarTv31,manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
