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