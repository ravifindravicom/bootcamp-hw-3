# bootcamp-hw-3

## Homework Assignment 3

In this homework assignment I created a random password generator.  The method of implementation I chose (I work in Cybersecurity!) sacrifices a little bit of efficiency to ensure the password is truly as random as permitted by the underlying Javascript random function used. It would have been simplea tiny bit more efficient  to pick the categories at random, and then select a character at random from the chosen catgory. However, this is not quite correct, as the probability of selecting a category would then need to be wreighted by the number of characters in a category, which would have added more complexity. 

The  primary areas for improvement in this project are:
- A proper implementation would not use confirm/prompt for selection of rules, and that should be replaced by Jquery.
- Rather than use math.Random, for this application it would have been better to use Crypto.getRandomValues(). 
- In retrospect it would have been better to create a generatePassword object to encapsulate the resulting functions.

The index.html, script.js and style.css pages provided are the only files. Only the script.js was edited, as what was provided met the rest of the specs and was responsive.

## Deployed To:
The resulting web page has been deployed to:
https://ravifindravicom.github.io/bootcamp-hw-3/

## Image
![alt "Random Password Generator Page Graphic"](./Random_Password_Gen.png?raw=true "Raandom Password Generator")