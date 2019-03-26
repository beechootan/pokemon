import { question } from 'readline-sync'

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
      { name: 'Shadow Ball', dmg: 10, effects: 'Poison' },
      { name: 'Tackle', dmg: 15, effects: 'NA' }
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
      { name: 'Tackle', dmg: 6, effects: 'NA' },
      { name: 'Shadow Ball', dmg: 10, effects: 'Poison' },
    ],
  },
]

//declare pokemon and HP for player one and two
let player1 = null
let player2 = null
let P1HP = null
let P2HP = null

//declare variable to check whose turn
let isP1Turn = true

//declare variable for skill effects and skill's damage
let P1Poison = 5
let P2Poison = 5
let P1Sleep = false
let P2Sleep = false
let damage = 0

//declare variable for random experience points
let randomExp = Math.round(Math.random() * 30)

//declare variable for selected pokemon from player one
let selectedPokemon = null

//check if selection is valid
// repeat the question, tell them they entered incorrectly
while (selectedPokemon === null) {
  console.log("Please select your pokemon")
  displayOptions(pokemon)
  let ansPokemon = question('Select your pokemon to fight\n')

  // check if wrong number
  //To-do: need to check if input is not digit
  if (parseInt(ansPokemon) > pokemon.length) {
    console.log("You entered a nonexistent pokemon number")
  } else {
    player1 = pokemon[parseInt(ansPokemon)].name
    selectedPokemon = 1
  }
}

//select opponent pokemon by random 
let randomOpp = Math.round(Math.random() * (pokemon.length - 1))
player2 = pokemon[randomOpp].name

//display the pokemon selected by Player 1.
console.log("You have sent " + player1)

//display the opponent selected by computer / player 2
console.log("You have encounter your opponent " + player2)

//assign pokemon HP to player 1 and 2
P1HP = pokemon[selectedPokemon].HP
P2HP = pokemon[randomOpp].HP

//display player 1 and player 2's HP
console.log(player1 + " has " + P1HP + " HP")
console.log(player2 + " has " + P2HP + " HP")

//write a divider line for better view
console.log('-----------------------------')

//check if anyone die
while (P1HP > 0 && P2HP > 0) {

  //check whose turn
  if (isP1Turn) {
    //check if player 2 is using sleep effect
    if (P2Sleep) {
      console.log(player2 + " used sleep effect. It's " + player2 + " turn now. ")
      P2Sleep = false
      isP1Turn = !isP1Turn
    } else {
      //You can choose one of pokemon skills
      console.log("Please select your skill")
      //list all skill for pokemon selected
      displayOptions(pokemon[selectedPokemon].skill)

      //check if selection is valid
      //declare variable for selected skill and get skill selection from player 1
      let selectedSkill = null
      let ansSkill = null

      // repeat the question, tell them they entered incorrectly
      while (selectedSkill === null) {
        ansSkill = question('Select your skill to fight\n')
        // if wrong number
        // To-do: check if input is digit
        if (parseInt(ansSkill) > pokemon[selectedPokemon].skill.length) {
          console.log("You entered a nonexistent skill")
        } else {
          //display skill used by player 1
          console.log(player1 + " has uses " + pokemon[selectedPokemon].skill[ansSkill].name)

          //check if the skill effect is Poison and reset the count to 0
          if (pokemon[selectedPokemon].skill[ansSkill].effects = 'Poison') {
            P1Poison = 0
          }

          //check if the skill effect is Sleep and reset to true
          if (pokemon[selectedPokemon].skill[ansSkill].effects = 'Sleep') {
            P1Sleep = true
          }
          selectedSkill = 1
        }
      }

      //calculate damage if effect is poison
      //check the effect of skill
      //damage is random number * damage tied with skill and pokemon, round up. 
      if (P1Poison <= 4) {
        //damage = Math.round(Math.random() * pokemon[selectedPokemon].skill[ansSkill].dmg) * 10
        damage = pokemon[selectedPokemon].skill[ansSkill].dmg * 10
        P1Poison += 1
      } else {
        //damage = Math.round(Math.random() * pokemon[selectedPokemon].skill[ansSkill].dmg)
        damage = pokemon[selectedPokemon].skill[ansSkill].dmg
      }
      //display damage
      console.log(pokemon[selectedPokemon].skill[ansSkill].name + " hits for " + damage + " damage")
      P2HP = P2HP - damage
      console.log(pokemon[randomOpp].name + "'s health is reduced to " + P2HP)

      //write a divider line for better view
      console.log('-----------------------------')
    }
  } else {
    //check if player 1 used sleep effect
    if (P1Sleep) {
      console.log(player1 + "is using sleep effect. It's " + player1 + " turn now. ")
      P1Sleep = false
      isP1Turn = !isP1Turn

    } else {
      //auto select skill for player 2  
      let randomSkill = Math.round(Math.random() * (pokemon[randomOpp].skill.length - 1))

      //check if the skill effect is Poison and set the count to 0
      if (pokemon[randomOpp].skill[randomSkill].effects = 'Poison') {
        P2Poison = 0
      }

      //check if the skill effect is Sleep and set the true
      if (pokemon[randomOpp].skill[randomSkill].effects = 'Sleep') {
        P2Sleep = true
      }

      //display skill used by player 2
      console.log(player2 + " has uses " + pokemon[randomOpp].skill[randomSkill].name)

      //calculate damage 
      if (P2Poison <= 4) {
        //damage = Math.round(Math.random() * pokemon[randomOpp].skill[randomSkill].dmg) * 10
        damage = pokemon[randomOpp].skill[randomSkill].dmg * 10
        P2Poison += 1
      } else {
        //damage = Math.round(Math.random() * pokemon[randomOpp].skill[randomSkill].dmg)
        damage = pokemon[randomOpp].skill[randomSkill].dmg
      }
      console.log(pokemon[randomOpp].skill[randomSkill].name + " hits for " + damage + " damage")
      P1HP = P1HP - damage
      console.log(player1 + "'s health is reduced to " + P1HP)

      //write a divider line for better view
      console.log('-----------------------------')
    }
  }
}

//4. Critical Hit. Enemy fainted because health reduced to 0/
//5. You have earned experience points.
if (P1HP >= 0) {
  console.log(player2 + ' faints')
  console.log('You has gained ' + randomExp + ' experience')
  console.log("Game Over")
} else {
  console.log('You faints')
  console.log(player2 + ' has gained ' + randomExp + ' experience')
  console.log("Game Over")
}

//6. if your pokemon levels up, might learn new skills.