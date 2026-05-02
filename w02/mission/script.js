let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.querySelector("body").style.backgroundColor="#333333";
        document.querySelector("p").style.color="white";
        document.querySelector("h1").style.color="white";
        document.querySelector("#italics").style.color="white";
        document.querySelector("ol").style.color="white";
        document.getElementById("img").setAttribute("src","images/byui-logo-white.png")

    } else {
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("p").style.color="black";
        document.querySelector("h1").style.color="black";
        document.querySelector("#italics").style.color="black";
        document.querySelector("ol").style.color="black";
        document.getElementById("img").setAttribute("src", "images/byui-logo-blue.webp")
    }
}           
