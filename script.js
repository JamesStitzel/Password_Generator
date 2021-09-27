var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var valid = [];

var password = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  valid = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var passwordLength = prompt("Enter the length of you password between 8 and 126");

  if (isNaN(passwordLength)) {
    alert("Please input a valid number");
    return generatePassword();
  }

  if (parseInt(passwordLength) <= 8 || passwordLength >= 128) {
    alert('Please enter a proper password length!')
  } else if (passwordLength == 0 || passwordLength === null) {
    alert("You didnt write anything you dunce!")
    return generatePassword()
  }

  var numbers = confirm("Do you want numbers?")
  var upper = confirm("Do you want uppercased letters?")
  var lower = confirm("Do you want lowercased letters?")
  var special = confirm("Do you want special characters?")

  if (!numbers && !lower && !upper && !special) {
    alert("You must at least choose one type!");
    return generatePassword();
  }


  if (numbers) {
    valid = valid.concat(numericCharacters)
  }
  if (lower) {
    valid = valid.concat(lowerCasedCharacters)
  }
  if (upper) {
    valid = valid.concat(upperCasedCharacters)
  }
  if (special) {
    valid = valid.concat(specialCharacters)
  }

  var password = "";

  for (var i = 1; i <= passwordLength; i++) {
    password = password + valid[Math.floor(Math.random() * valid.length)];
  }
  return password;
}
