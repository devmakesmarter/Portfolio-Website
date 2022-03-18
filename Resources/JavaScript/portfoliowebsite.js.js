let buttonchanger = document.getElementById("button");

function buttonchange() {

    buttonchanger.style.color = "white";
    buttonchanger.style.backgroundColor = "red";
    buttonchanger.innerHTML = "Dieses Projekt kommt noch"
}



buttonchanger.onclick = buttonchange;

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



console.log(description);


const show = () => {
    if (description.style.display != "block") {

        return description.style.display = "block";


    } else if ((description.style.display === "block")) {

        return description.style.display = "none"
    }
}

readmore.addEventListener("click", show);



/* End This is for the readmore Event */