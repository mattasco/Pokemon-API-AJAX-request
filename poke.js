let i = 0;
let j = 70;
let k = 0;
let l = 80;
let derive = true;
let hausse = false;
let derive2 = true;
let animation = true;



$(function () {
    setInterval(function () {
        $(".slideshow ul").animate({ marginLeft: -350 }, 800, function () {
            $(".slideshow ul").css({ marginLeft: 0 }).find("li:last").after($(".slideshow ul").find("li:first"));
        })
    }, 3500);
});

function loadStats() {
    var random = Math.floor(Math.random() * (300 - 1 + 1)) + 1;
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://pokeapi.co/api/v2/pokemon/" + random, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            document.getElementById("imgStats").src = response.sprites.front_default;
            document.getElementById("name2").innerHTML = "Name: " + response.name;
            document.getElementById("atk").innerHTML = "Atk: " + response.stats[1].base_stat;
            document.getElementById("def").innerHTML = "Def: " + response.stats[2].base_stat;
            document.getElementById("hp").innerHTML = "HP: " + response.stats[0].base_stat;
            document.getElementById("spec.atk").innerHTML = "Spec.Atk: " + response.stats[3].base_stat;
            document.getElementById("spec.def").innerHTML = "Spec.Def: " + response.stats[4].base_stat;
            document.getElementById("speed").innerHTML = "Speed: " + response.stats[5].base_stat;
        }
    };
}

function loadType() {
    var random = Math.floor(Math.random() * (300 - 1 + 1)) + 1;
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + random, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            document.getElementById("imgType").src = response.sprites.front_default;
            document.getElementById("name3").innerHTML = "Name: " + response.name;
            document.getElementById("type1").innerHTML = "Type 1: " + response.types[0].type.name;
            document.getElementById("type2").innerHTML = "Type 2: " + response.types[1].type.name;
        }
    };
}

function loadSize() {
    var random = Math.floor(Math.random() * (1118 - 1 + 1)) + 1;
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://pokeapi.co/api/v2/pokemon/" + random, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhttp.responseText);
            document.getElementById("imgSize").src = response.sprites.front_default;
            document.getElementById("name").innerHTML = "Name: " + response.name;
            document.getElementById("Weight").innerHTML = "Weight: " + response.weight + " kg";
            document.getElementById("Height").innerHTML = "Height: " + response.weight / 10 + " cm";
        }
    };
}


function Decollage() {

    document.getElementById("ronron").style.top = j + "%";
    document.getElementById("ronron").style.right = k + "%";
    document.getElementById("ronron2").style.top = j + "%";
    document.getElementById("ronron2").style.right = l + "%";

    if (derive == true) { k++; }
    if (derive == false) { k--; }
    if (k <= -5) { derive = true; }
    if (k >= 5) { derive = false; }

    if (derive2 == false) { l++; }
    if (derive2 == true) { l--; }
    if (l <= 75) { derive2 = false; }
    if (l >= 85) { derive2 = true; }

    if (hausse == true) { j++; }
    if (hausse == false) { j--; }
    if (j >= 70) { hausse = false; }
    if (j <= 0) { hausse = true; }

    

    console.log("j : " + j);
}
function Speed(btn) {

    while (animation == true) {
        setTimeout(() => { Decollage() }, 70 * i);
        i++;
        if (i >= 10000) {
            animation = false;
        }
    }
}
