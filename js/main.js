// let myName = "Ehtsham";

// console.log(myName.split("t"));

// check string is a palindrome

let checkString = "Fawad";

function checkPalindrome(checkString) {
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

    const reverseString = checkString.split('').reverse().join('');

    if (reverseString !== checkString) {
        return "Not a palindrome";
    }
    return "Is a palindrome";
}

// console.log(checkPalindrome(checkString));

// Write code that will return a random letter from your name

let name = "Ehtsham";

// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))
// console.log(name.charAt(Math.floor(Math.random() * name.length)))

// Rock, Papers, Scissors

// Decision tree!

let player;
let computer;

if (player === computer) {
    // Its a tie
} else if (player === "rock") {
    if (computer === "paper") {
        // computer wins
    } else {
        // player wins
    }
} else if (player === "paper") {
    if (computer === "scissors") {
        // computer wins
    } else {
        // player wins
    }
} else {
    if (computer === "rock") {
        // computer wins
    } else {
        // player wins
    }
}
