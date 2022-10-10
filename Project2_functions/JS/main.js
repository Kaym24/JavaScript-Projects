function My_First_Function() { //creates a function
    var str = "Happy"; // a variable for the function
    var str = "Halloween!"; //another variable for the function
    document.getElementById("Button_Text").innerHTML = str; //this makes the button useable
}  

function My_Second_Function() { //creates function
    var p = "My dog Spicy is the best dog in the world."; // creates a paragraph variable
    document.getElementById("Button_Text").innerHTML = p; //pulls the variable for the function
} 

function myFunction() { //creates function
    var sentence = "I am learning"; // creates a variable sentence
    sentence += " a lot from this book!"; // creates a sentence variable
    document.getElementById("Concatenate").innerHTML = sentence; // combines both sentences to create concatenate
}