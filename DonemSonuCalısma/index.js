//    variable scope = where a variable is recognized
//    and accessible (local vs global)


// TEMPERATURE CONVERSION PROGRAM
/*const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32 ) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }

}
*/
/*
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    let temp;

    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "Select a unit";
    }
}
*/

let info = document.querySelector("#info")
let examGrade = prompt("Notu giriniz")
let textInfo;
const smile = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-grin-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M6.488 7c-.23-.598-.661-1-1.155-1-.493 0-.924.402-1.155 1A2.8 2.8 0 0 1 4 6c0-1.105.597-2 1.333-2 .737 0 1.334.895 1.334 2 0 .364-.065.706-.179 1m5.334 0c-.23-.598-.662-1-1.155-1-.494 0-.925.402-1.155 1a2.8 2.8 0 0 1-.179-1c0-1.105.597-2 1.334-2C11.403 4 12 4.895 12 6c0 .364-.065.706-.178 1M2.696 8.756a.48.48 0 0 1 .382-.118C4.348 8.786 6.448 9 8 9c1.553 0 3.653-.214 4.922-.362a.48.48 0 0 1 .383.118.3.3 0 0 1 .096.29c-.09.47-.242.921-.445 1.342-.263.035-.576.075-.929.115A37 37 0 0 1 8 10.75c-1.475 0-2.934-.123-4.027-.247-.353-.04-.666-.08-.93-.115A5.5 5.5 0 0 1 2.6 9.045a.3.3 0 0 1 .097-.29ZM8 13.5a5.49 5.49 0 0 1-4.256-2.017l.116.014c1.115.126 2.615.253 4.14.253s3.025-.127 4.14-.253l.117-.014A5.49 5.49 0 0 1 8 13.5"/>
    </svg>
    ` 

const sad = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-grimace" viewBox="0 0 16 16">
    <path d="M7 6.25c0 .69-.448 1.25-1 1.25s-1-.56-1-1.25S5.448 5 6 5s1 .56 1 1.25m3 1.25c.552 0 1-.56 1-1.25S10.552 5 10 5s-1 .56-1 1.25.448 1.25 1 1.25m2.98 3.25A1.5 1.5 0 0 1 11.5 12h-7a1.5 1.5 0 0 1-1.48-1.747v-.003A1.5 1.5 0 0 1 4.5 9h7a1.5 1.5 0 0 1 1.48 1.747zm-8.48.75h.25v-.75H3.531a1 1 0 0 0 .969.75m7 0a1 1 0 0 0 .969-.75H11.25v.75zm.969-1.25a1 1 0 0 0-.969-.75h-.25v.75zM4.5 9.5a1 1 0 0 0-.969.75H4.75V9.5zm1.75 2v-.75h-1v.75zm.5 0h1v-.75h-1zm1.5 0h1v-.75h-1zm1.5 0h1v-.75h-1zm1-2h-1v.75h1zm-1.5 0h-1v.75h1zm-1.5 0h-1v.75h1zm-1.5 0h-1v.75h1z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14"/>
    </svg>
    `

if (examGrade >= 0 && examGrade <= 100){

    info.classList.add("text-primary")
    textInfo = smile

    if(examGrade >=90) {
        textInfo += "AA"
    }else if(examGrade >=85){
        textInfo += "BA"
    } else if(examGrade >=80){
        textInfo += "BB"
    } else if(examGrade >=75){
        textInfo += "CB"
    } else if(examGrade >=70){
        textInfo += "CC"
    } else if(examGrade >=65){
        textInfo += "DC"
    } else if(examGrade >=60){
        textInfo += "DD"
    } else if(examGrade >=50){
        textInfo += "FD"
    } else if(examGrade <50){
        textInfo = `${sad} FF`
        info.classList.remove("text-primary")
        info.classList.add("second-class")
    }

}else{
    textInfo = "Geçerli bi not girmediniz"
}

info.innerHTML = `${textInfo} -> ${examGrade}`