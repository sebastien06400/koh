// const fs = require('fs');

var requestURL = 'list.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

count = 1

first = document.getElementById("first")
second = document.getElementById("second")

// request.onload = function() {
    // col = document.getElementById(`user${count+1}`)
    // var ladder = request.response;
    // top8(ladder["name"], ladder["classement"], col)
//   }


  function top8(name, array, element) {
    element.innerHTML = `
    <div class="carte">${name}</div></br>
    <div class="carte"><img src="${array[0]}.png" width="80px"></div>
    <div class="carte"><img src="${array[1]}.png" width="80px"></div>
    <div class="carte"><img src="${array[2]}.png" width="80px"></div>
    <div class="carte"><img src="${array[4]}.png" width="80px"></div>
    <div class="carte"><img src="${array[5]}.png" width="80px"></div>
    <div class="carte"><img src="${array[6]}.png" width="80px"></div>
    <div class="carte"><img src="${array[7]}.png" width="80px"></div>
    `
    count+=1;
  }

  

//   docu = document.documentElement
console.log("start")
  saved = document.getElementById("save")

  saved.addEventListener('click', () => {
      console.log("WHAT")
  }
  )

  tost = document.getElementById("user1")

  saved.addEventListener("click", () => {  
      console.log("CLIqué") 
      first.style.display = "none"
      second.style.display = "flex"

    //   tost.innerHTML = "LOUP"

// var json = '{"name":"johnny","classement":"[1,1,1]}';

//Parse the JSON: convert it into an object
var hash = request.response

username = document.getElementById('name').value

ordered = []

for (let k=1; k<9;k++) {
    order = document.getElementById(`${k}`).src.match(/^.*(?=.png)/)[0].slice(-1)
ordered.push(order)
// console.log(Regex.Match(one.src, "^.*?(?=-)"))
}
// ^.*(?=.png)
console.log(ordered)
console.log("SRC")


hash.user2 = {"name":username,"classement":ordered}
//add whatever you want
console.log(hash)

    let n = 0
    while (hash[`user${n+1}`]) {
        console.log("LOOP")
        n+=1;
    col = document.getElementById(`user${n}`)
    console.log(col)
    // var ladder = request.response;
    console.log("ok")
    top8(hash[`user${n}`]["name"], hash[`user${n}`]["classement"], col)




    // fs.readFile('list.json', 'utf8', function readFileCallback(err, data){
    //     if (err){
    //         console.log(err);
    //     } else {
    //     obj = JSON.parse(data); //now it an object
    //     obj.table.push({id: 2, square:3}); //add some data
    //     json = JSON.stringify(obj); //convert it back to json
    //     fs.writeFile('list.json', json, 'utf8', callback); // write it back 
    // }});
    

    
  }
  }
  )



// request.onload = function() {

// console.log("oklii")


// }

  
  