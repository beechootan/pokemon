import { question } from 'readline-sync'

//1. board is a 3x3 array with blank cells
//declare the board
let board = [
  [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']
]

//check how many player (1 or 2)
let NoOfPlayer = null

//check if player wants to continue playing
let startNewGame = true
let ansNewGame = 'Y'
let gameover = false
let checkvalid = false

//first player = X
let mark = 'X'

//print the board
function printboard() {
  console.log("-------------")
  for (let i = 0; i < 3; i++) {
    console.log("| " + board[i][0] + " | " + board[i][1] + " | " + board[i][2] + " |")
    console.log("-------------")
  }
  console.log('')
  console.log('____________________________________________')

}

//check if column has been taken
function isEmpty(board, i, j, mark) {
  if (board[i][j] != " ") {
    return false
  } else {
    board[i][j] = mark
    return true
  }
}

//check if board is full
function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === ' ' || board[i][1] === ' ' || board[i][2] === ' ') {
      return false
    }
  }
  console.log('Board is full. ')
  console.log('There is no winner. ')
  return true
}

//7. check rows, columns, diagonals for 3 matching pieces
function ifWin(board) {
  return (ifRowsMatch(board) || ifColumnsMatch(board) || ifDiagonalMatch(board))
}

//check if row is matching
function ifRowsMatch(board) {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] != ' ' && (board[i][0] === board[i][1]) && (board[i][1] === board[i][2])) {
      return true
    }
  }
  return false
}

//check if column is matching
function ifColumnsMatch(board) {
  for (let j = 0; j < 3; j++) {
    if (board[0][j] != ' ' && (board[0][j] === board[1][j]) && (board[1][j] === board[2][j])) {
      return true
    }
  }
  return false
}

//check if diagonal is matching
function ifDiagonalMatch(board) {
  if (board[0][0] != ' ' && (board[0][0] === board[1][1]) && (board[1][1] === board[2][2])) {
    return true
  }
  if (board[0][2] != ' ' && (board[0][2] === board[1][1]) && (board[1][1] === board[2][0])) {
    return true
  }
  return false
}

//game start
while (startNewGame) {
  console.log("Let's play Tic Tac Toe")

  //How many player
  while (NoOfPlayer === null) {
    console.log('Please select number of player. ')
    NoOfPlayer = parseInt(question('1 for one player and 2 for two player: '))
    if (NoOfPlayer != 1 && NoOfPlayer != 2) {
      console.log('Please answer 1 or 2. ')
      NoOfPlayer = null
    }
  }

  //1 player = input vs computer, 2 players = 2 inputs
  if (NoOfPlayer === 1) {
    //check if board is full or there is a winner, game stop
    printboard()
    while (!gameover) {
      if (mark === 'X') {
        console.log("It's your turn. ")
        let i = -1
        let j = -1
        while (i != 1 && i != 2 && i != 3 && j != 1 && j != 2 && j != 3) {
          while (i != 1 && i != 2 && i != 3) {
            i = parseInt(question('Please select row 1 or 2 or 3: '))
          }
          while (j != 1 && j != 2 && j != 3) {
            j = parseInt(question('Please select column 1 or 2 or 3: '))
          }
          if (isEmpty(board, (i - 1), (j - 1), mark)) {
            printboard()
          } else {
            console.log('Column has been taken.')
            console.log('Please select again.')
            i = -1
            j = -1
          }
        }
        mark = 'O'
      } else {
        let i = -1
        let j = -1
        while (i != 1 && i != 2 && i != 3 && j != 1 && j != 2 && j != 3) {
          i = Math.round(Math.random() * 2)
          j = Math.round(Math.random() * 2)
          if (isEmpty(board, i, j, mark)) {
            printboard()
          } else {
            i = -1
            j = -1
          }
        }
        mark = 'X'
      }

      //check if board is full
      gameover = isBoardFull()

      //check if there is winner
      gameover = ifWin(board)

    }

    if (ifWin(board)) {
      if (mark === 'O') {
        console.log('Congratulations! You beat computer! ')
      } else {
        console.log('Sorry, you lose! ')
      }
    }
  } else {
    while (!gameover) {
      printboard()
      if (mark === 'X') {
        console.log("It's player 1's turn. ")
      } else {
        console.log("It's player 2's turn. ")
      }

      let i = -1
      let j = -1
      while (i != 1 && i != 2 && i != 3 && j != 1 && j != 2 && j != 3) {
        while (i != 1 && i != 2 && i != 3) {
          i = parseInt(question('Please select row 1 or 2 or 3: '))
        }
        while (j != 1 && j != 2 && j != 3) {
          j = parseInt(question('Please select column 1 or 2 or 3: '))
        }
        if (isEmpty(board, (i - 1), (j - 1), mark)) {
          printboard()

        } else {
          console.log('Column has been taken.')
          console.log('Please select again.')
          i = -1
          j = -1
        }
      }
      //check if board is full
      gameover = isBoardFull()

      //check if there is winner
      gameover = ifWin(board)

      if (mark === 'X') {
        mark = 'O'
      } else {
        mark = 'X'
      }
    }
    if (ifWin(board)) {
      if (mark === 'X') {
        console.log('Player 2 has won! ')
      } else {
        console.log('Player 1 has won! ')
      }
    }

  }

  //check if player want to continue playing
  console.log('Do you want to start again? ')
  ansNewGame = question('Y for yes: ')
  if (ansNewGame === 'Y' || ansNewGame === 'y') {
    board = [
      [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']
    ]
    gameover = false
    NoOfPlayer = null
    mark = 'X'
  } else {
    startNewGame = false
  }
}