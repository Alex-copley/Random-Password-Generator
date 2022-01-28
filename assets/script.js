// calls the asssignment for the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var userInput = prompt("Please type how many characters you want your password to contain");
  var charString = '';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '1234567890'
  var special = '~?\|/`?)(*&^$%#@!'
  var print = '';
  if (userInput >= 8 && userInput <= 128) {
    var confirmUpper = confirm('Do you want Upper Case letters?')
    var confirmLower = confirm('Do you want Lower Case letters?')
    var confirmNumbers = confirm('Do you want Numbers?')
    var confirmSpecial = confirm('Do you want special Characters?')
    if (confirmUpper) { charString += upperCase; }
    if (confirmLower) { charString += lowerCase; }
    if (confirmNumbers) { charString += numbers; }
    if (confirmSpecial) { charString += special; }
    var charStringLength = charString.length;
    for (var i = 0; i < userInput; i++) {
      print += charString.charAt(Math.floor(Math.random() * charStringLength));
    } // loop through the created charString randomly with the math.random method and put each selected letter in to the variable print.
  } else if (userInput < 8) {
    alert("Please pick a password that is atleast 9 characters")
  } else if (userInput > 128) {
    alert("Please pick a password that is less than 129 characters")
  }
  return print;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
