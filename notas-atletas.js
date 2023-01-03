let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

let nomesDosCompetidores = 0
let mediaValida = 0
let notasObtidas = 0


for (let i = 0; i < atletas.length; i++){
  //Nome dos competidores
  nomesDosCompetidores = atletas.map(function(nomes){
    return nomes.nome
  })
  //Notas obtidas e ordenadas do menor ao maior
  notasObtidas = atletas.map(function(notas){
    let total = notas.notas
    total.sort(function(a, b) {
      return a - b;
    });
    return total
  })

  console.log(`Atleta: ${nomesDosCompetidores[i]}`)
  console.log(`Notas Obtidas: ${notasObtidas[i]}`)

  //Média das 3 notas desconsiderando a maior e a menor
  let notasAtleta = notasObtidas[i].slice(1, notasObtidas[i].length-1)
  let soma = notasAtleta.reduce(function(total,atual){
  return (total + atual)
  })
  
  let media = soma/notasAtleta.length
  //------- Caso deseje arredondar, usar a linha abaixo e comentar a de cima
  // let media = (soma/notasAtleta.length).toFixed(3)
  console.log(`Média Válida: ${media}`)
  console.log()
}
