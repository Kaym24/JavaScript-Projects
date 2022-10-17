function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short.":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote + " ";
}

function Pet(Type, Breed, Age, Color) {
    this.Pet_Type = Type;
    this.Pet_Breed = Breed;
    this.Pet_Age = Age;
    this.Pet_Color = Color;
}

var Kay = new Pet("Dog", "Chihuahua", 1, "Black and White") ;
var Angel = new Pet("Dog", "German Shepherd", 4, "Brown and black") ;
var Karen = new Pet("Sugar Glider", "Sugar Glider", 1, "Brown and White") ;
function Pets() {
    document.getElementById("New_and_This").innerHTML =
    "Kay has a pet " + Kay.Pet_Type + " -colored " + Kay.Pet_Color +
    " and the pet breed is " + Kay.Pet_Breed ;
}

function nesting_Function() {
    document.getElementById("Nested_Function").innerHTML = Count () ;
    function Count () {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}