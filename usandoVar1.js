{
    {
        {
            {
                var sera = 'Será???' // var é visivel pra fora do bloco (outras linuagem é apenas no bloco)
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // erro pq o var esta dentro da funcion