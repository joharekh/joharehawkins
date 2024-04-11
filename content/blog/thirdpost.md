---
title: Comments and pseudocode
description: This is a post displaying pseudocode and Javascript comments.
date: 2024-03-25
tags:
  - pseudocode
  - js
---
<br>
<br>
<p>Please press the <span class="pink">JS</span> button to see <span class="pink">JavaScript</span>. Please also click to <a href="https://codepen.io/joharelofthouse/pen/vYMLNzJ">"see the pen"</a> to see output in the Codepen console.
<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js" data-slug-hash="vYMLNzJ" data-user="joharelofthouse" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/joharelofthouse/pen/vYMLNzJ">
  Functions</a> by Joharé (<a href="https://codepen.io/joharelofthouse">@joharelofthouse</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<br>
<br>
<p>Below are three examples Pseudocode demonstrating algorithmic thinking before proceeding to code. Each example is preceeded with a specification for the pseudocode.</p>

<br>
<b>1.Reading List</b>

 Keep track of which books you read and which books you want to read!

 Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and already read (a boolean indicating if you read it yet).

 Iterate through the array of books. For each book, log the book title and book author like so: “The Hobbit by J.R.R. Tolkien”.

 Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like ‘You already read “The Hobbit” by J.R.R. Tolkien’, and if not, log a string like ‘You still need to read “The Lord of the Rings” by J.R.R. Tolkien.’
```
//PSEUDOCODE 1
// Build a LIST called books containing book OBJECTS
//   book OBJECT number one, contains:
//     a STRING value for the title PROPERTY
//     a STRING value for the author PROPERTY
//     a BOOLEAN value for the read PROPERTY
//   book OBJECT number two...
//   book OBJECT number three...
//   ...

// begin FORLOOP to go through EACH book OBJECT in the books LIST
//   PRINT the VALUE from the title PROPERTY of the book OBJECT and the VALUE from the author PROPERTY of the book OBJECT in format 
          //"BOOK TITLE by BOOK AUTHOR"
//   IF the read PROPERTY has a VALUE EQUAL to TRUE
//     PRINT the text 
          //"You already read 'BOOK TITLE' by 'BOOK AUTHOR'." //current title and author index from current book object
//   ELSE
//     PRINT the text 
          //"You already read 'BOOK TITLE' by 'BOOK AUTHOR'." //current title and author index from current book object
// ENDOFORLOOP
```
<br>
<br>
 <b>2.Recipe</b>
<br>
 Create an object to hold information on your favourite recipes. It should have properties for:
 recipeTitle (a string)
 servings (a number)
 ingredients (an array of strings)
 directions (a string)

 List all recipes
 Create a loop to list all the ingredients.

```
//PSEUDOCODE 2
// build OBJECT recipe
//   recipe ITEM number one, contains a STRING value for the recipeTitle PROPERTY, and an INTEGER value for the servings PROPERTY, and an ARRAY for the ingredients PROPERTY, and a STRING value for the directions PROPERTY
//   recipe ITEM number two...
//   recipe ITEM number three...
//   ...


// begin FOR LOOP and ITERATE through each recipe item from the first recipe in the index to the last/index end of the OBJECT
//   PRINT the current recipe's 
        //title VALUE from the recipeTitle PROPERTY
//   begin FOR LOOP and ITERATE through the ingredients ARRAY items from index start to the length/index end of the ARRAY //coming from current recipe item in index
//      PRINT the current ARRAY item from ingredients ARRAY
//   end ENDFOR
// ENDFOR

```
<br>
<br>
<b>3.Fix start</b>
<br>
 Create a function called fixStart. It should take a single argument, a string, and return a version where all occurrences of its first character have been replaced with ‘*****’, except for the first character itself. You can assume that the string is at least one character long. For example:


 fixStart('babble'): 'ba**le'

 fixStart('turtle'): 'tur*le'

```
//PSEUDOCODE 3
// Create FUNCTION which takes one STRING argument with at lease one character
//   store VARIABLE containing the character VALUE of the first character index item of the STRING argument
//   begin FORLOOP that starts at index item 1 and iterates through to the end of the length of the STRING
//     IF it is TRUE that the current letter in the STRING matches the stored VARIABLE value, 
//       THEN replace the current letter in the index with an asterix
//     ENDIF
//   ENDFOR
// ENDFUNCTION

// call FUNCTION with ARGUMENT
```