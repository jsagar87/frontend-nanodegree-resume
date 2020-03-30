/*
Your Challenge
For this quiz, your goal is to make sure that if a user puts HTML in their resume's JSON, it doesn't break the resume!

How? You need to make sure that the < and > from their HTML get turned into harmless strings.

When you're ready to replace all of the < and >, click "Continue to Quiz!"
*/

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = newHTML.replace(/(<)|(>)/g,"");
    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));



// Solution in answer

var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
// Did your code work? The line below will tell you!
console.log(charEscape(html));