array = []
array_icon = []
array_love = []
array_hate = []

for (let x = 1; x < 9; x++) {
image = document.getElementById(`${x}`)
array.push(image)

a_icon = document.getElementById(`${x}a`)
array_icon.push(a_icon)

a_love = document.getElementById(`love${x}`)
array_love.push(a_love)

a_hate = document.getElementById(`hate${x}`)
array_hate.push(a_hate)
}


// iconslove = document.getElementsByClassName("iconlove")

for (let x = 0; x < 8; x++) {

array[x].addEventListener("mouseover", () => {   
    array[x].style.filter = "saturate(0%)";
    array[x].style.opacity = "0.3"
    array_love[x].style.visibility = "visible";
    array_hate[x].style.visibility = "visible";

    // array_icon[x].style.visibility = "visible";
    // array[x].style.zIndex = "-7";

})

array_love[x].addEventListener("mouseenter", () => {   
    array_love[x].style.visibility = "visible";
    array[x].style.opacity = "0.3"
    array[x].style.filter = "saturate(0%)";
})

array_love[x].addEventListener("mouseout", () => {   
    array_love[x].style.visibility = "visible";
    array[x].style.opacity = "0.3"
    array[x].style.filter = "saturate(0%)";
    array[x].style.filter = "saturate(140%)";
    array_love[x].style.visibility = "hidden";
    array_hate[x].style.visibility = "hidden";
    array[x].style.opacity = "1"
})

array_hate[x].addEventListener("mouseenter", () => {   
    array_hate[x].style.visibility = "visible";
    array[x].style.opacity = "0.3"
    array[x].style.filter = "saturate(0%)";
})

array_hate[x].addEventListener("mouseout", () => {   
    array_hate[x].style.visibility = "visible";
    array[x].style.opacity = "0.3"
    array[x].style.filter = "saturate(0%)";
    array[x].style.filter = "saturate(140%)";
    array_love[x].style.visibility = "hidden";
    array_hate[x].style.visibility = "hidden";
    array[x].style.opacity = "1"
})

array[x].addEventListener("mouseout", () => {   

    array[x].style.filter = "saturate(140%)";
    array_love[x].style.visibility = "hidden";
    array_hate[x].style.visibility = "hidden";
    array[x].style.opacity = "1"


})

array_love[x].addEventListener("click", () => {   
    bot = array[x].src
    tops = array[x-1].src
    array[x-1].src = bot
    array[x].src = tops
})

array_hate[x].addEventListener("click", () => {   
    bot = array[x+1].src
    tops = array[x].src
    array[x+1].src = tops
    array[x].src = bot
})

}





// var obj = JSON.parse('list.json');
// console.log(obj);



// const csv = from 'csv-parser';
// console.log("ok")


// //import dependencies
// const fs = require("fs");
// const csv = require('csvtojson');
// const { Parser } = require('json2csv');

// (async () => {

//     //LOAD
//     const list = await csv().fromFile("liste.csv");

//     console.log(list)
//     console.log("ok")
// }
// )


/////////////////////////////////////////////
// const reader = new FileReader()

// reader.readAsText("liste.csv")

// reader.onload = function () {
//     console.log(reader.result)
//     console.log("tost")
// }
/////////////////////////////////////////////
// function getAsText(fileToRead) {
//     let reader = new FileReader();
//     reader.readAsText(fileToRead);
//     reader.onload = loadHandler;

// }

// function loadHandler(event) {
//     let csv = event.target.result;
//     processData(csv);
// }

// let attendeesArray = []

// function processData(csv) {
//     let allTextLines = csv.split(/\r\n|\n)
//     for (let i=0; i<allTextLines.length; i++) {
//         let row = allTextLines[i].split(';');
//         let col =[]
//         for (let j=0; j<row.length;j++) {
//             col.push(row[j])
//         }

//         attendeesArray.push(col)
//     }
// }




