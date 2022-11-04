//creates a function using the let keyword
function let_Method() { //creates a length method
    let text ="Hello World!"; //creates a text
    document.getElementById("let").innerHTML = text.length; //displays the length function
}

//creates a function for instruments using the for loo
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//creates an array function
function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "eating";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "sleeping";
    Dog_Picture[3] = "bullying";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        Dog_Picture[3] + ".";
}

//creates a constant function 
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"pink", color2:"white"};
    Musical_Instrument.color = "pink";
    Musical_Instrument.price = "$900";
    Musical_Instrument.color2 = "white";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price + " and the color is " + Musical_Instrument.color + " and "
         + Musical_Instrument.color2 + ".";
}

//creates a variable and uses let keyword
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//creates a variable
var  X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

//creates a function to count to ten using a while loop
function count_To_Ten() {
    var Digit = "";
    var X = 1 ;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten") .innerHTML = Digit;
}

//creates an object using the let keyword
function Object_function () {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    }
    document.getElementById("Car_Object").innerHTML = car.description();
} ;