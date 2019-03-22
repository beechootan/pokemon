import { question } from 'readline-sync'

//declare pokemon and HP for player one and two
let me = null
let opponent = null
let myHP = null
let oppHP = null

//To display the selection
function displayOptions(array) {
  for (let i in array) {
    console.log(i + '. ' + array[i].name)
  }
}

//list of pokemon
const pokemon = [
  {
    name: 'A',
    HP: 300,
    skill: [
      { name: 'Shadow Ball', dmg: 20, effects: 'Poison' },
      { name: 'Tackle', dmg: 7, effects: 'NA' }
    ],
  },
  {
    name: 'B',
    HP: 400,
    skill: [
      { name: 'Hyper Beam', dmg: 35, effects: 'Sleep' },
      { name: 'Tackle', dmg: 10, effects: 'NA' }
    ],
  },
  {
    name: 'C',
    HP: 500,
    skill: [
      { name: 'Hyper Beam', dmg: 25, effects: 'Sleep' },
      { name: 'Tackle', dmg: 4, effects: 'NA' },
      { name: 'Shadow Ball', dmg: 29, effects: 'Poison' },
    ],
  },
]

//declare variable
let isMyTurn = true
let myPoison = 5
let oppPoison = 5
let mySleep = 5
let oppSleep = 5

let randomExp = Math.round(Math.random() * 30)
let selectedPokemon = null

//check if selection is valid
// repeat the question, tell them they entered incorrectly
while (selectedPokemon === null) {
  console.log("Please select your pokemon")
  displayOptions(pokemon)
  let ansPokemon = question('Select your pokemon to fight\n')
  // if wrong number
  if (parseInt(ansPokemon) > pokemon.length) {
    console.log("You entered a nonexistent pokemon number")
  }
  me = pokemon[parseInt(ansPokemon)].name
  selectedPokemon = 1

}

//select opponent pokemon
let randomOpp = Math.round(Math.random() * pokemon.length) - 1


//display the pokemon selected.
console.log("You have sent " + me)
//display the opponent
console.log("You have encounter your opponent " + pokemon[randomOpp].name)

//display Opponent and your HP
console.log(me + " has " + pokemon[me].HP + " HP")
console.log(pokemon[randomOpp].name + " has " + pokemon[randomOpp].HP + " HP")

console.log('-----------------------------')
myHP = me.HP
oppHP = pokemon[randomOpp].HP

//check if anyone die
while (myHP > 0 && oppHP > 0) {
  let attackername = isMyTurn ? me : pokemon[randomOpp].name
  let defendername = isMyTurn ? pokemon[randomOpp].name : me

  if (isMyTurn) {
    //You can choose one of pokemon skills
    console.log("Please select your skill")
    displayOptions(pokemon[me].skill
    let selectedSkill = null
    while (selectedSkill === null) {
      let ansSkill = question('Select your skill to fight\n')
      // if wrong number
      if (parseInt(ansSkill) > pokemon.[ansPokemon].skill.length) {
        console.log("You entered a nonexistent skill")
      }
      console.log(attackername + " has uses " + pokemon[ansSkill].skill.name)
      //check the effect of skill
      if (myPoison < 5) {
        let damage = Math.round(Math.random() * pokemon[ansSkill].skill.damage) * 10
      } else {
        let damage = Math.round(Math.random() * pokemon[ansSkill].skill.damage)
      }
      console.log(pokemon[ansPokemon].skill.[ansSkill].name + " hits for " + damage + " damage")

      selectedskill = 1
    } else {
      let randomSkill = Math.round(Math.random() * pokemon[randomOpp].skill.length)
      console.log(attackername + " has uses " + pokemon[randomOpp.skill[randomSkill].name)
      let damage = Math.round(Math.random() * pokemon[randomOpp.skill[randomSkill].damage)
      console.log(pokemon[randomOpp].skill.[randomSkill].name + " hits for " + damage + " damage")
    }

    if (isMyTurn) {
      oppHP = oppHP - damage
      console.log(pokemon[randomOpp].name + "'s health is reduced to " + oppHP)
    } else {
      myHP = myHP - damage
      console.log(pokemon[ansPokemon].name + "'s health is reduced to " + myHP)
    }
    isMyTurn = !isMyTurn
  }

  //4. Critical Hit. Enemy fainted because health reduced to 0/

  //5. You have earned experience points.
  if (myHP >= 0) {
    console.log(pokemon[randomOpp].name + ' faints')
    console.log('You has gained ' + randomExp + ' exp')
    console.log("Game Over")
  } else {
    console.log('You faints')
    console.log(pokemon[randomOpp].name + ' has gained ' + randomExp + ' exp')
    console.log("Game Over")
  }

//6. if your pokemon levels up, might learn new skills.