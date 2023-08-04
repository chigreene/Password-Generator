// Assignment Code
var generateBtn = document.querySelector("#generate");
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = window.prompt("How long would you like your password to be?");

  var includeUpperCase = window.confirm("Would you like to include uppercase characters?");
  
  var includeLowerCase = window.confirm("Would you like to include lowercase characters?");

  var includeNumbers = window.confirm("Would you like to include numbers?");

  var includeSpecialChar = window.confirm("Would you like to include special characters?")
  
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '`'];
  
  var charset = [];
  if (includeLowerCase) charset = charset.concat(lowerCase);
  if (includeUpperCase) charset = charset.concat(upperCase);
  if (includeNumbers) charset = charset.concat(numbers);
  if (includeSpecialChar) charset = charset.concat(specialChar);
  
  
  var password = '';
  var n = charset.length;

  for (var i = 0; i<passwordLength; i++) {
    password += charset[Math.floor(Math.random() * n)]
  }
  
  //we want a loop that will run the number of times that is determined by passwordLength. Each time the loop runs it selects a random variable from out master array. 
  
  //The master array is composed of the smaller arrays that are chosen by the choice prompt.
  
  
  
  return password;
}
// generatePassword()





// function generatePassword () {







/*
HOW TO GET BUTTONS TO PROVIDE PROMPTS
  you could use a confirm button to ask for each character type.
  use the true false output to add a string to the 

HOW TO RANDOMLY SELECT THE NUMBER OF IN PUTS IT WANTS FROM THE STRING


*/

