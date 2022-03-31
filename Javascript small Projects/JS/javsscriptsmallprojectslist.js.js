const number = () => {

    return Math.floor(Math.random() * 256);

}



var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");


const colorgeneratorone = () => {

    let rgbcode = "rgb(" + number() + "," + number() + "," + number() + ")";


    one.style.backgroundColor = rgbcode;
    one.innerHTML = rgbcode;
}

const colorgeneratortwo = () => {

    let rgbcode = "rgb(" + number() + "," + number() + "," + number() + ")";


    two.style.backgroundColor = rgbcode;
    two.innerHTML = rgbcode;
}

const colorgeneratorthree = () => {

    let rgbcode = "rgb(" + number() + "," + number() + "," + number() + ")";


    three.style.backgroundColor = rgbcode;
    three.innerHTML = rgbcode;
}

const colorgeneratorfour = () => {

    let rgbcode = "rgb(" + number() + "," + number() + "," + number() + ")";


    four.style.backgroundColor = rgbcode;
    four.innerHTML = rgbcode;
}

const colorgeneratorfive = () => {

    let rgbcode = "rgb(" + number() + "," + number() + "," + number() + ")";


    five.style.backgroundColor = rgbcode;
    five.innerHTML = rgbcode;
}

const colorgeneratorsix = () => {

    let rgbcode = "rgb(" + number() + "," + number() + "," + number() + ")";


    six.style.backgroundColor = rgbcode;
    six.innerHTML = rgbcode;
}



const fire = () => {

    colorgeneratorone();
    colorgeneratortwo();
    colorgeneratorthree();
    colorgeneratorfour();
    colorgeneratorfive();
    colorgeneratorsix();

}


var trigger = document.getElementById("footertextcolorgenerator");



trigger.addEventListener("click", fire);



/* Here Start Projekt Two Javascript */





function lifeduration() {

    var age = document.getElementById("age").value;

    age = parseInt(age);



    age = agebonus(age);
    age = married(age);
    age = liferisk(age);


    /*
        var checkbox = document.getElementsByName("hartfacts");
        var checkboxvalue = [];

        console.log(checkboxvalue.length);
        console.log(typeof(checkboxvalue.length));

        for (var i = 0; i < checkbox.length; i++) {

            if (checkbox[i].checked == true) {

                checkboxvalue.push(checkbox[i].value);
            }
        }

        if (checkboxvalue.length == 1) {

            age = age * 0.96;

        } else if (checkboxvalue.length == 2) {

            age = age * 0.94;

        } else if (checkboxvalue.length == 3) {

            age = age * 0.92;
        } else if (checkboxvalue == []) {

            age = age * 1;

        }



    */


    var lifeduration = document.getElementById("lifeduration");
    lifeduration.innerHTML = `Ihre vorraussichtliches Lebensendalter ${age} Jahre`;
    lifeduration.style.color = "darkgreen";
}





var btn = document.getElementById("btnberechnen");

console.log(btn);

btn.addEventListener("click", lifeduration);


// This is the begin  for married Function 
function married(age) {
    var married = $("input:radio[name=married]:checked").val();


    if (married === "yes") {

        age = Math.floor(age * 1.15);

    } else if (married === "no") {

        age = Math.floor(age * 1.00);

    }
    return age;
}

// This is the end  for married Function


/*This is the Checkbox function. Here a some Important things to now. First get the 
Checkboxes bye Name, because they all have the same Name. It generates an Array with the Elements 
after then start a foor loop. The foor Loop goes over the array. The condition is check if is an checkbox 
checked, because it return true. If it return true, it pushes the value of the ArrayElemnt to the var checkboxvalue.    
Then i check the lengt of the checkboxvalue, because i wonna increase for evert checked box the lifeduration. Higher the number of the checkboxvalue.length 
more increases. It is organized with if, else if etc... 
*/

function liferisk(age) {

    var checkbox = document.getElementsByName("hartfacts");
    var checkboxvalue = [];
    for (var i = 0; i < checkbox.length; i++) {

        if (checkbox[i].checked == true) {

            checkboxvalue.push(checkbox[i].value);
        }
    }

    if (checkboxvalue.length == 1) {

        age = age * 0.96;

    } else if (checkboxvalue.length == 2) {

        age = age * 0.94;

    } else if (checkboxvalue.length == 3) {

        age = age * 0.92;
    } else if (checkboxvalue == []) {

        age = age * 1;

    }
    return age;

}

function agebonus(age) {

    if (age > 0 && age <= 10) {

        age = age + 65;

    } else if (age > 10 && age <= 20) {

        age = age + 50;

    } else if (age > 20 && age <= 30) {

        age = age + 35;

    } else if (age > 30 && age <= 40) {

        age = age + 20;

    } else if (age > 40 && age <= 60) {

        age = age + 10;

    }
    return age;
}