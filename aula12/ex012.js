let hora = new Date()
let horas = hora.getHours()
//pega a hora da maquina que esta rodando o programa

console.log(`Agora são exatamente ${horas} horas.`)
if (horas < 12) {
    console.log(`Bom dia`)
    console.log(``)
} else if (horas <= 18 ) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite`)
}