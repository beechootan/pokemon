let me = "A"
let opponent = "B"
let myHP = 200
let opponentHP = 200
let myskill = "Shadow Ball"
let oppskill = "Magic push"
let isMyTurn = true

//const opponentSkill = "Shadow Ball"
let mydamage = 30
let oppdamage = 40

let randomExp = Math.round(Math.random() * 30)


//1. You have encounter your opponent Mr Mine.
console.log("You have encounter your opponent " + opponent)

//2. You send in Gengar.
console.log("You have sent " + me)

//3. You can choose one of Gengar's skills
console.log(me + " has " + myHP + " HP")
console.log(opponent + " has " + opponentHP + " HP")

//3. Gengar use shadow ball. Shadow Ball hits for 50 DMG. 
//4. Critical Hit. Enemy fainted because health reduced to 0/
while (myHP > 0 && opponentHP > 0) {
  let attackername = isMyTurn ? me : opponent
  let defendername = isMyTurn ? opponent : me
  let skill = isMyTurn ? myskill : oppskill
  let damage = Math.round(Math.random() * 49)

  console.log(attackername + " has uses " + skill)
  console.log(skill + " hits for " + damage + " damage")

  if (isMyTurn) {
    opponentHP = opponentHP - damage
    console.log(opponent + "'s health is reduced to " + opponentHP)
  } else {
    myHP = myHP - damage
    console.log(me + "'s health is reduced to " + myHP)
  }
  isMyTurn = !isMyTurn
}

//4. Critical Hit. Enemy fainted because health reduced to 0/

//5. You have earned experience points.
if (myHP >= 0) {
  console.log(opponent + ' faints')
  console.log(me + ' has gained ' + randomExp + ' exp')
  console.log("Game Over")
} else {
  console.log(me + ' faints')
  console.log(opponent + ' has gained ' + randomExp + ' exp')
  console.log("Game Over")
}

//6. if your pokemon levels up, might learn new skills.