

count = 0

first = document.getElementById("first")
second = document.getElementById("second")


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
  count += 1;
}


username = document.getElementById('name').value

saved = document.getElementById("save")
displayed = document.getElementById("display")



saved.addEventListener("click", () => {
  username = document.getElementById('name').value

  if (username.length < 1) {
    alert("Tu dois mettre un prénom !")
  } else if (username.length > 9) {
    alert("Raccourcis le prénom stp.")
  } else {
    console.log("CLIqué")
    first.style.display = "none"


    setTimeout(toast, 100);

    async function toast() {
      console.log("inside")
      const response = await axios.get('https://jsonblob.com/api/get/7d103d16-21dc-11eb-a00e-53ad7aeed96a')

      setTimeout(toast2, 100)

      function toast2() {
        let hash = (response.data);
        console.log(hash)
        second.style.display = "flex"



        ordered = []

        for (let k = 1; k < 9; k++) {
          order = document.getElementById(k).src.match(/^.*(?=.png)/)[0].slice(-1)
          ordered.push(order)
        }
        console.log(ordered)
        console.log("SRC")

        hash[`user${count+1}`] = {
          "name": username,
          "classement": ordered
        }
        console.log(hash)

        let n = 0
        while (hash[`user${n+1}`]) {
          n += 1;
          col = document.getElementById(`user${n}`)
          top8(hash[`user${n}`]["name"], hash[`user${n}`]["classement"], col)

        }
        axios.put('https://jsonblob.com/api/get/7d103d16-21dc-11eb-a00e-53ad7aeed96a', hash)


      }
    }

  }
})


displayed.addEventListener("click", () => {

    first.style.display = "none"

    setTimeout(toast, 10);

    async function toast() {
      const response = await axios.get('https://jsonblob.com/api/get/7d103d16-21dc-11eb-a00e-53ad7aeed96a')

      setTimeout(toast2, 10)

      function toast2() {
        console.log("enter")
        let hash = (response.data);
        second.style.display = "flex"
console.log(hash)
        let n = 1
        while (hash[`user${n+1}`]) {
          n += 1;
          col = document.getElementById(`user${n}`)
          top8(hash[`user${n}`]["name"], hash[`user${n}`]["classement"], col)

        }


      }
    }

  }

)