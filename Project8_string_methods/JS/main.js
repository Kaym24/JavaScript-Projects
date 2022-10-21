function slice_Method() { //creates a slice method
    var Sentence = "All work and no play makes Johnny a dull boy."; //creates a variable sentence
    var Section = Sentence.slice(27,33); //creates a variable section
    document.getElementById("Slice") .innerHTML = Section; //displays the slice function
}

function string_Method() { //creates a string method
    var X =182; //creates a number varaible
    document.getElementById("Numbers_to_string").innerHTML = X.toString() ; //displays the string function
}

function precision_Method() { //creates a precision method
    var X =12938.3012987376112; //creates a number varaible
    document.getElementById("Precision").innerHTML = X.toPrecision(10) ; //displays the prcision function
}

function fixed_Method() { //creates a fixed method
    var X =5.56789; //creates a number varaible
    document.getElementById("fixed").innerHTML = X.toFixed(); //displays the fixed function
}

function value_Method() { //creates a value method
    var text ="Hello World!"; //creates a text varaible
    document.getElementById("value").innerHTML = text.valueOf(); //displays the value function
}

const arr1 = ["Cecilie", "Lone"]; //creates an array
const arr2 = ["Emil", "Tobias", "Linus"]; //creates an array

function concat_Method() { //creates a concat method
    const children = arr1.concat(arr2); //creates a const
    document.getElementById("concat").innerHTML = children; //displays the concat function
    
}