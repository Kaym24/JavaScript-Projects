var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>") ;
}
function Add_numbers_2() {
    document.write(X + 100) ;
}
Add_numbers_1() ;
Add_numbers_2() ;

function Add_numbers_3() {
    var X = 10 ;
    document.write(20 + X + "<br>") ;
}
function Add_numbers_4() {
    document.write(X + 100) ;
}
Add_numbers_3() ;
Add_numbers_4() ;

function Add_numbers_5() {
    var X = 10 ;
    console.log(15 + X) ;
}
function Add_numbers_6() {
    console.log(X + 100) ;
}
Add_numbers_5() ;
Add_numbers_6() ;

function get_Date() {
    if (new Date() .getHours() < 20) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function birth_Date() {
    if (new Date("2001-01-24") .getFullYear());{
    document.getElementById("Leave").innerHTML = "Is it my birthday yet?";
    }
}

function Food_Function() {
    Food = document.getElementById("Food") .value;
    if (Food <= 7) {
        Vote = "You need to try new foods";
    }
    else {
        Vote = "You have great taste!";
    }
    document.getElementById("What's_your_favorite_food?") .innerHTML = Vote;
}

function Time_function() {
    var Time = new Date() .getHours() ;
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!" ;
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon." ;
    }
    else {
        Reply = "It is evening time." ;
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}