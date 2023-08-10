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

  // user prompts to select the parameters they wish to use
  do{
  var passwordLength = window.prompt("How long would you like your password to be? Please select a value of 8 characters up to 128 characters.");
  } while (passwordLength < 8 || passwordLength > 128);

  var includeUpperCase = window.confirm("Would you like to include uppercase characters?");
  
  var includeLowerCase = window.confirm("Would you like to include lowercase characters?");

  var includeNumbers = window.confirm("Would you like to include numbers?");

  var includeSpecialChar = window.confirm("Would you like to include special characters?")
  
  // the arrays the user is choosing from 
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '`'];
  
// concating the chosen arrays into on parent array for the for loop to work on.

  var charset = [];
  if (includeLowerCase) charset = charset.concat(lowerCase);
  if (includeUpperCase) charset = charset.concat(upperCase);
  if (includeNumbers) charset = charset.concat(numbers);
  if (includeSpecialChar) charset = charset.concat(specialChar);
  
  // creating the variable password and the length of the choose arrays
  var password = '';
  var n = charset.length;

  // for loop creating random password from the parameters
  for (var i = 0; i<passwordLength; i++) {
    password += charset[Math.floor(Math.random() * n)]
  }
  
  return password;
}
