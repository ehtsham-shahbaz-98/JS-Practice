// let myName = "Ehtsham";

// console.log(myName.split("t"));

// check string is a palindrome

// let checkString = "Fawad";

// function checkPalindrome(checkString) {
  // Solution 1

  // const len = checkString.length;

  // for (let i = 0 ; i < len / 2 ; i++) {
  //     if (checkString[i] !== checkString[len - 1 - i]) {
  //         return "Its not a palindrome";
  //     }
  // }
  // return "It is a palindrome";

  // Solution 2

  // const arr = checkString.split('');

  // const revArr = arr.reverse();

  // const newString = revArr.join('');

  // if (newString !== checkString) {
  //     return "Not a palindrome";
  // }
  // return "Is a palindrome";

  // Optimization:

//   const reverseString = checkString.split("").reverse().join("");

//   if (reverseString !== checkString) {
//     return "Not a palindrome";
//   }
//   return "Is a palindrome";
// }

// console.log(checkPalindrome(checkString));

// Write code that will return a random letter from your name

// let name = "Ehtsham";

// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))

// Rock, Papers, Scissors

// Decision tree!

// let player;
// let computer;

// if (player === computer) {
//     // Its a tie
// } else if (player === "rock") {
//     if (computer === "paper") {
//         // computer wins
//     } else {
//         // player wins
//     }
// } else if (player === "paper") {
//     if (computer === "scissors") {
//         // computer wins
//     } else {
//         // player wins
//     }
// } else {
//     if (computer === "rock") {
//         // computer wins
//     } else {
//         // player wins
//     }
// }

// Switch Rock, Paper, Scissors.

// let player = "scissors";
// let computer = "paper";

// switch (player) {
//   case computer:
//     console.log("Tie game!");
//     break;
//   case "rock":
//     if (computer === "paper") {
//       console.log("computer wins!");
//     } else {
//       console.log("Player wins");
//     }
//     break;
//   case "paper":
//     if (computer === "scissors") {
//       console.log("computer wins!");
//     } else {
//       console.log("Player wins");
//     }
//     break;
//   case "scissors":
//     if (computer === "rock") {
//       console.log("Computer wins");
//     } else {
//       console.log("Player wins");
//     }
//     break;
//   default:
//     console.log("Invalid");
//     break;
// }

// let player = "paper";
// let computer = "paper";

// let result =
//   player === computer
//     ? "Game Tied"
//     : player === "rock" && computer === "paper"
//     ? "Computer Wins"
//     : player === "paper" && computer === "scissors"
//     ? "Computer wins"
//     : player === "scissors" && computer === "rock"
//     ? "Computer wins"
//     : "Player Wins";

// console.log('winner ===> ', result);

// Find max and min value from the array

// let array = [10, 2, 13, 40, 15];

// let min = array[0];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min = array[i];
//     } else if (max < array[i]) {
//         max = array[i];
//     }
// }

// console.log('Min value ===> ', min);
// console.log('Max value ===> ', max);

let inputName = prompt("Please enter your name");
if (inputName) {
  console.log(inputName ?? "You did'nt enter your name.");
} else {
  console.log("You didn't enter your name");
}
