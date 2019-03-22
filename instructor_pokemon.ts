// having 2 pokemon, with specific oppHP
const myPokemon = 'Charmander'
const opponent = 'Mr.Mime'
let myHP = 100
let oppHP = 200
let isMyTurn = true
let currentPokemon = myPokemon

console.log('You have encountered a wild ' + opponent)
console.log('You send out ' + myPokemon)
console.log(myPokemon + ' has ' + myHP + ' HP')
console.log(opponent + ' has ' + oppHP + ' HP')

// the game continues while either pokemon has more than 0 HP
// as long as my HP is more than 0 and opponent HP is more than 50
// if myHP goes below 0, stop
// if oppHP goes below 0, stop

// myHP >0 || oppHP > 0
// my HP goes below 0, but opponent HP is above 0, continue
// opponent HP goes below 0, but my HP is above 0, continue
// my HP is below 0 and opponent HP is below 0, stop
while (myHP > 0 && oppHP > 0) {
  console.log('------------------------------')
  let attackerName = isMyTurn ? myPokemon : opponent
  let defenderName = isMyTurn ? opponent : myPokemon
  // first pokemon attacks
  console.log(attackerName + ' uses Shadow Ball')
  console.log('Shadow Ball hits for 50 damage')

  if (isMyTurn) {
    oppHP = oppHP - 50
    console.log(defenderName + "'s health is reduced to " + oppHP)
  } else {
    myHP = myHP - 50
    console.log(defenderName + "'s health is reduced to " + myHP)
  }

  // TODO: switch turns
  isMyTurn = !isMyTurn
}

if (oppHP <= 0) {
  console.log(opponent + ' faints')
  console.log(myPokemon + ' has gained 50 exp')
} else if (myHP <= 0) {
  console.log(myPokemon + ' faints')
  console.log('GAME OVER')
}
