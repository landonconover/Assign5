
// words.js
// This script defines a function for sorting words in a case-insenstive manner.

// Define the $() shortcut function below:
 
function $(elId){
    if (typeof elId != 'undefined'){
      return document.getElementById(elId);  
    }
} // End of $ function.

// Function for setting text of an element:
function setText(elementId, message) {
    'use strict';
    if( ( typeof elementId == 'string') && ( typeof message == 'string' ) ){

        var output = $(elementId);

        if (output.textContent !== undefined) {
            output.textContent = message;
        } else {
            output.innerText = message;
        }
    } // End of main IF.
} // End of setText() function.

// This function sorts a list of words.
// The function takes one argument, a string.
function sortWords(max) {
    'use strict';

    // Get the words:
    // One line from Step 4 on page 252 goes here
     var words = $('words').value;
    
    // Convert the string to an array:
    // One line from Step 5 on page 252 goes here
    words = words.split(' ');

    // Sort the words:
    // The code in Step 6 on page 252 goes here - all of it
    var sorted = words.map(function(value) {
        return value.toLowerCase();
    }).sort();      
    
    // Send the output to the page:
    // One line from Step 7 on page 253 goes here
    setText('output', sorted.join(', '));
        
    // Return false to prevent submission:
    return false;

} // End of sortWords() function.

function init() {
    'use strict';
    // One line from step 9 on page 253 goes here
     $('theForm').onsubmit = sortWords;
} // End of init() function.
window.onload = init;
