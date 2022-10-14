document.write(typeof "Word"); //created a typeof operator

document.write("11" + 10); // combines a string and number

function my_Function() { // creates a function
    document.getElementById("Test").innerHTML = 0/0 ; //displays the test function
}

function Test2() { // creates a function
    document.getElementById("Test2").innerHTML = isNaN('This is a string') ; //displays the test2 function
}

function Test3() { // creates a function
    document.getElementById("Test3").innerHTML = isNaN('007') ; //displays the test3 function
}

document.write(2E310) ; //displays infinity

document.write(-3E310) ; //displays negative infinity

document.write(10 > 2) ; //displays a true AND operator

document.write(10 < 2) ; //displays a false AND operator

console.log(2 + 2) ; //displays a math operatoion using console

console.log(21 > 22) ; //displays false using boolean logic on console

document.write(10 == 10) ; //displays a true equality

document.write(3 == 11) ; //displays a false equality

x = 10 ;
y = 10 ;
document.write(x === y); //displays a true triple equality

x = 82 ;
y = "28" ;
document.write(x === y) ; //displays a false triple equality

x = 21 ;
y = "21" ;
document.write(x === y) ; //displays a false triple equality

x = 21 ;
y = 12 ;
document.write(x === y) ; //displays a false triple equality

document.write(5 > 2 && 10 > 4); //displays a true && opertor

document.write(5 > 10 && 10 > 4); //displays a false && opertor

document.write(5 > 10 || 10 > 4); //displays a true || opertor
 
document.write(5 > 10 || 10 > 20); //displays a false || opertor

function not_Function() { //creates a function
    document.getElementById("Not").innerHTML = !(20 > 10) ; //displays the Not function as true
}

function not_Function2() { //creates a function
    document.getElementById("Not2").innerHTML = !(5 > 10) ; //displays the Not function as false
}