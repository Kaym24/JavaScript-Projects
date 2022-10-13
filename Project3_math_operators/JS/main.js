function subtraction_Function() { //creates a subtraction function
    var Subtraction = 28 - 7; //creates the subtraction variable
    document.getElementById("Sub").innerHTML = "28 - 7 = " + Subtraction; //displays the outcome of the subtraction function 
}

function addition_Function() { //creates a addition function
    var addition = 10 + 11; //creates the addition variable
    document.getElementById("Add").innerHTML = "10 + 11 = " + addition; //displays the outcome of the addition function 
}

function multiplication() { //creates a multiplication function
    var simple_Math = 7 * 3; //creates the multiplication variable
    document.getElementById("Multi").innerHTML = "7 * 3 = " + simple_Math; //displays the outcome of the multiplication function 
}

function division() { //creates a division function
    var simple_Math = 21 / 3; //creates the division variable
    document.getElementById("Div").innerHTML = "21 / 3 = " + simple_Math; //displays the outcome of the division function 
}

function more_Math() { //creates a multiple math function
    var simple_Math = (2 + 3.2) * 10 / 2 -5; //creates the multi math variable
    document.getElementById("MMath").innerHTML = "2 plus 3.2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; //displays the outcome of the multi math function 
}

function modulus_Operator() { //creates a modulus function
    var simple_Math = 80 % 30; //creates a modulus variable
    document.getElementById("Math").innerHTML = "When you divide 80 by 30 you have a remainder of: " + simple_Math; //displays the outcome of the modulus function 
}

function negation_Operator() { //creates a negation function
    var x = 21; //creates a x variable
    document.getElementById("Negation").innerHTML = -x; //displays the outcome of the negation function 
}

var Y = 5; //creates a Y variable
Y++; //shows how much you're going up on the variable
document.write(Y); //displays the outcome of the increment variable 

var K = 5.25; //creates a K variable
K--; //shows how much you're going down on the variable
document.write(K); //displays the outcome of the decrement variable 

window.alert(Math.random()); //creates a window alert box to show a random number

window.alert(Math.random() * 50); //creates a window alert box to show a random number from 1-50