// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

/* The generatePassword() function first creates a character pallete based on user choices, then randomly selects passowrd of appropriate size from pallete. We recheck to ensure rules were met as the random selection may not always include all selections. */
function generatePassword() {
  var getPassword = [];
  var passwordStr ="";
  var passwordChoices = [false,false, false, false];
  const charArray = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ"," !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~","0123456789"];
  var palleteStr = pallete(passwordChoices,charArray);
  var passLength = getPasswordLength();
  var passRuleCheck = false;
 do {
    for(i=0; i<passLength; i++)
        {
          var rand0to1 = Math.random();
          var randScaledUp = Math.floor(rand0to1 * palleteStr.length);
          getPassword[i] = palleteStr[randScaledUp];
          passwordStr=passwordStr+getPassword[i];
      }
    passRuleCheck = checkRules(getPassword,passwordChoices,charArray);
  } while(passRuleCheck === false);
  return(passwordStr);
}

/* The checkRules function simply rechecks to ensure rules were met. */
function checkRules(getPassword,passwordChoices,charArray){
  var status = false;
  var subStatus = [0,0,0,0];
  var numChoicesMade = 0;
  var numChoicesFound = 0;
  for(i=0;i<4;i++){
    if(passwordChoices[i] === true){
      numChoicesMade++;
      for(j=0;j<getPassword.length;j++){
        for(k=0;k<charArray[i].length;k++){
          if(getPassword[j]===charArray[i][k]) {
            subStatus[i]++;
          }
        }
      }
      if(subStatus[i] > 0){
        numChoicesFound++;
      } 
    }
  }
  if(numChoicesMade === numChoicesFound) {
    return(true);
  } else {
    return(false);
  }
}

/* This function constructs the character selection pallete based on user choices. */
function pallete(passwordChoices,charArray){
  var atLeastOneChar = false;
  var palleteStr="";
  atLeastOneChar = passwordChoices[0] || passwordChoices[1] || passwordChoices[2];
  do {
  /* Note using confirm and alert should preferably be replaced by jQuery form with radio buttons */
    
      passwordChoices[0] = confirm("Do you want lowercase characters?");
      passwordChoices[1] = confirm("Do you want uppercase characters?");
      passwordChoices[2] = confirm("Do you want special characters?");
      atLeastOneChar = passwordChoices[0] || passwordChoices[1] || passwordChoices[2];
      if (atLeastOneChar == false) { 
        alert("You need at least one character type; lets try again");
     }
    }
  while (atLeastOneChar == false);
  passwordChoices[3] = confirm("Do you want numerals?");
  for(i=0; i<4; i++) {
      if(passwordChoices[i])
          palleteStr = palleteStr + charArray[i];
  }
return(palleteStr);
}

/* getPasswordLength gets the user's desired password length. */
function getPasswordLength() {
var passwordStr;
var passwordLength;
do {
  passwordStr = prompt("Choose a length from 8 to 128 characters");
  passwordLength = parseInt(passwordStr,10)
}
while((passwordLength < 8) || (passwordLength > 128));
return(passwordLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

