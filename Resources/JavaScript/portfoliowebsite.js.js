/* Clock at the Head Div*/



const time = () => {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(time, 10);

/* Clock at the Head Div*/




/*
let buttonchanger = document.getElementById("button");



function buttonchange() {
    
        buttonchanger.style.color = "white";
        buttonchanger.style.backgroundColor = "lightslategray;";
    
}




buttonchanger.onclick = buttonchange;

*/
let buttonchangerone = document.getElementById("buttonone");

function buttonchangeone() {

    buttonchangerone.style.color = "white";
    buttonchangerone.style.backgroundColor = "red";
    buttonchangerone.innerHTML = "Dieses Projekt kommt noch"
}

buttonchangerone.onclick = buttonchangeone;




let buttonchangertwo = document.getElementById("buttontwo");



function buttonchangetwo() {

    buttonchangertwo.style.color = "white";
    buttonchangertwo.style.backgroundColor = "red";
    buttonchangertwo.innerHTML = "Dieses Projekt kommt noch"
}

buttonchangertwo.onclick = buttonchangetwo;

let number = Math.floor(Math.random() * 5);





/* Start This is for the readmore Event */

let readmore = document.getElementById("readmoreprojekt1");
let description = document.getElementById("descriptionprojekt1");

let readmoreprojekt2 = document.getElementById("readmoreprojekt2");
let description2 = document.getElementById("descriptionprojekt2");

let readmoreprojekt3 = document.getElementById("readmoreprojekt3");
let description3 = document.getElementById("descriptionprojekt3");

let readmoreprojekt4 = document.getElementById("readmoreprojekt4");
let description4 = document.getElementById("descriptionprojekt4");



const show = () => {
    if (description.style.display != "block") {

        return description.style.display = "block";


    } else if ((description.style.display === "block")) {

        return description.style.display = "none"
    }
}

const show2 = () => {
    if (description2.style.display != "block") {

        return description2.style.display = "block";


    } else if ((description2.style.display === "block")) {

        return description2.style.display = "none"
    }
}

const show3 = () => {
    if (description3.style.display != "block") {

        return description3.style.display = "block";


    } else if ((description3.style.display === "block")) {

        return description3.style.display = "none"
    }
}


const show4 = () => {
    if (description4.style.display != "block") {

        return description4.style.display = "block";


    } else if ((description4.style.display === "block")) {

        return description4.style.display = "none"
    }
}




readmore.addEventListener("click", show);
readmoreprojekt2.addEventListener("click", show2);
readmoreprojekt3.addEventListener("click", show3);
readmoreprojekt4.addEventListener("click", show4);








/* End This is for the readmore Event */




/*Brechnung*/