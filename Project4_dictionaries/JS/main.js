function my_Dictionary () { //creates a dictionary function
    var Animal = { //creates an animal variable
        Species:"Dog", //creates a species KVP
        Color:"black and white", //creates a color KVP
        Breed:"Chihuahua Mix", //creates a breed KVP
        Age:1, //creates an age KVP
        Sound:"Bark!" //creates a sound KVP
    };
    delete Animal.Sound; //deletes one of the KVPs
    document.getElementById("Dictionary").innerHTML = Animal.Sound; // displays the dictionary function
}