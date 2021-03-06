# WORD-GAME-CONSTRUCTOR       
                                                  
## Objective
Created a word guess game based on the states of United States. The primary objective was practice constructors to have modularized code.   

### Screenshot

![game](https://github.com/bilalsarimeseli/Word-Game-Constructor/blob/master/Screen%20Shot%202020-03-05%20at%2011.07.10%20AM.png?raw=true)

### Technologies Used

Back-End

 * Node.js
 * NPM Packages
 
### Setup
1. git clone https://github.com/bilalsarimeseli/Word-Game-Constructor
2. cd Word-Game-Constructor in your terminal
3. npm install 
4. node main.js
                                                  
                                                  
                                                  ___INSTRUCTIONS__

The game receives user input using the inquirer or prompt npm packages.

It has three basic js files.

__Letter.js__: Contains a constructor, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor defines:

A string value to store the underlying character for the letter

A boolean value that stores whether that letter has been guessed yet

A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

__Word.js__: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor defines:    

An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. This calls the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

__index.js__: The file containing the logic for the course of the game, which depends on Word.js and:

Randomly selects a word and uses the Word constructor to store it

Prompts the user for each guess and keeps track of the user’s remaining guesses

