function celToFar(x){

    return x * 9/5  + 32;
    
} 

function farToCel(x){ 
    return (x - 32) * 5/9;
}

function displayToFar(){
    var input = Number(document.getElementById("n1").value); 
    var farenheit = celToFar(input);  

    console.log(farenheit);
    
    document.getElementById("farenheit").value = farenheit;

}

function displayToCel(){

    var input2 = Number(document.getElementById("n2").value);
    var celcius = farToCel(input2);

    document.getElementById("celcius").value = celcius.toFixed(5);
}

function metersToFeet(x){
    return x*3.28084;
}

function displayMTF(){
    var input3 = Number(document.getElementById("meter").value);
    var feet = metersToFeet(input3);

    document.getElementById("feet").value = feet.toFixed(4);
}

function feetToMeters(x){
    return x/3.28084;
}

function displayFTM(){

    var input4 =Number(document.getElementById("foot").value);
    var meters = feetToMeters(input4);

    document.getElementById("meters").value = meters.toFixed(4);
}

document.getElementById("conv").addEventListener("click", displayToFar)// Mao jud ni ang mag display sa result when i click ang "convert" or dpende nimo unsa gamiton nimo
/* what this means isss gikuha nako ang id sa convert button which for this one is "conv", tapos nag add ko ug addEventListener
which from the name maminaw if naa bay something mahitabo, kung sa minecraft pa OBSERVER BLOCK with the method(?) na "click"
which ang pasabot pag i "click" nimo ang convert button, mutukar si displayToFar na function which is ang buhaton diba is?????? *refer to line 17 and so on wahahhaha */

document.getElementById("conv2").addEventListener("click", displayToCel)
document.getElementById("conv3").addEventListener("click", displayMTF)
document.getElementById("conv4").addEventListener("click", displayFTM)

/*ATENTIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONNN KANING NAA DIRI SA UBOS ENTIRELY OPTIONAL
 PARA RANI NA MAG PRESS UG ENTER MU SUBMIT SAD ANG FUCKING INPUT. NAA KOY NAKITA SA YT NA PWEDE NA DILI MAG INGANI PERO NITUKAR AKO ADHD WA NAKO GI TAKENOTE 
 NAKALIMOT KO ASA TO NA VID WAHHAHAHHAHHAHAH ANYWAAAAAAAAYYS NAG SEARCH KO SA GOOGOL MY OTHER BESTAY UNSAON
 
 NOTICE! IF SA VSCODE KA OR ISEARCH NIMO ANG "keyCode" NA KEYWORD NAAY BAGIS OR DEPRECATED(? WRONG SPILLINGS?!?!) HOWEVER WA JAPOY LABOT MGA DEVELOPERS 
 KAY MAO GIHAPON ANG WIDELY SUPPORTED SA BROWSERS SO TO THE ONE WHO "DISCONTINUED" THE "keyCode"(method?!? aganeee??! not sure?!??!)..... THEY CAN SUCK MY DICK*/

//for celToFar
document.getElementById("n1")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("conv").click();
    }
});

//enter for farToCel
document.getElementById("n2")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("conv2").click();
    }
});

//enter for meterToFeet
document.getElementById("meter")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("conv3").click();
    }
});

document.getElementById("foot")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("conv4").click();
    }
});