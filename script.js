// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
 var passwordLength;
  /*Variable would have sufficed instead of array in passwordChoice. */
  var passwordChoices = [false,false, false, false];
  var atLeastOneChar = false;
  /* Note for OWASP special characters one needs to escape the double quote and back slash. */
  const splCharFromOWASP = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
  const charNumerals = "0123456789";
  const charUpper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charLower ="abcdefghijklmnopqrstuvwxyz";
  var charPallete = splCharFromOWASP + charNumerals + charUpper + charLower;
  var passwordLength = 0;
  var randPassword;

  console.log(charPallete);

  do {
    passwordChoices[0] = confirm("Do you want at least one lowercase character?");
    passwordChoices[1] = confirm("Do you want at least one uppercase character?");
    passwordChoices[2] = confirm("Do you want at least one special character?");
    atLeastOneChar = passwordChoices[0] || passwordChoices[1] || passwordChoices[2];
    if (atLeastOneChar == false) { 
      alert("You need at least one character; lets try again");
   }
  }
  while (atLeastOneChar == false);
  passwordChoices[3] = confirm("Do you want at least one numeral?");
  do {
    console.log("Inside last while loop")
    passwordLength = prompt("Choose a length from 8 to 128 characters");
  }
  while((passwordLength <= 8) || (passwordLength >= 128))

  for (i=0;i<passwordLength;i++)
  {
    var rand0to1 = Math.random();
    console.log(rand0to1);
    var randScaledUp = Math.floor(rand0to1 * charPallete.length);
    console.log(randScaledUp);
    var randPassword[i] = charPallete[randScaledUp];
    console.log("-"+randPassword[i]);
  }
 return(randPassword);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}