let idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16 ) {
    console.log(`Por ter ${idade} anos não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Por ter ${idade} anos o voto e opcional`)
} else {
    console.log(`Por ter ${idade} anos o voto e obrigatório`)
}