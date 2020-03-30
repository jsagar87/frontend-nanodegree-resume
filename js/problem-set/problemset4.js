/* Your Challenge
If given a string of a two word name formatted with any mix of capitalization, 
can you manipulate the string to ensure the first name has a capital first letter and the last name 
is totally capitalized? Assume there's a space between the names. For instance, turning a 
string like "cAmEROn PittMAN" into "Cameron PITTMAN".

Your answer should be a single string saved to the variable called finalName.

*/

var name = "cAmEROn PittMAN" ;
function camelCaps(randomFormatStr){
    var newStr = randomFormatStr.slice(0).split(" ");
    var firstname = newStr[0].slice(0,1).toUpperCase() + newStr[0].slice(1).toLowerCase();
    var lastname = newStr[1].slice(0).toUpperCase();

    var newString = firstname + " " + lastname ;
    return newString;
}
var finalName = camelCaps(name);
console.log(finalName);


// Solution I wrote earlier

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = finalName.split(" ");
    firstName = names[0].charAt(0).toUpperCase() + names[0].toLowerCase().slice(1)
    finalName = firstName + " " + names[1].toUpperCase();
    
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

// Solution by UDacity

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = finalName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase()
    finalName = names.join(" ");
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));