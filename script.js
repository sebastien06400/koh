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



for (let x = 0; x < 8; x++) {

    array[x].addEventListener("mouseover", () => {
        array[x].style.filter = "saturate(0%)";
        array[x].style.opacity = "0.3"
        array_love[x].style.visibility = "visible";
        array_hate[x].style.visibility = "visible";


    })

    array_love[x].addEventListener("mouseenter", () => {
        array_love[x].style.visibility = "visible";
        array_hate[x - 1].style.visibility = "visible";
        array[x].style.opacity = "0.3"
        array[x].style.filter = "saturate(0%)";
    })

    array_love[x].addEventListener("mouseout", () => {
        array_love[x].style.visibility = "visible";
        array[x].style.opacity = "0.3"
        array[x].style.filter = "saturate(0%)";
        array[x].style.filter = "saturate(100%)";
        array_love[x].style.visibility = "hidden";
        array_hate[x].style.visibility = "hidden";
        array_hate[x - 1].style.visibility = "hidden";
        array[x].style.opacity = "1"
    })

    array_hate[x].addEventListener("mouseenter", () => {
        array_hate[x].style.visibility = "visible";
        array_love[x + 1].style.visibility = "visible";
        array[x].style.opacity = "0.3"
        array[x].style.filter = "saturate(0%)";
    })

    array_hate[x].addEventListener("mouseout", () => {
        array_hate[x].style.visibility = "visible";
        array[x].style.opacity = "0.3"
        array[x].style.filter = "saturate(0%)";
        array[x].style.filter = "saturate(100%)";
        array_love[x].style.visibility = "hidden";
        array_hate[x].style.visibility = "hidden";
        array_love[x + 1].style.visibility = "hidden";
        array[x].style.opacity = "1"
    })

    array[x].addEventListener("mouseout", () => {

        array[x].style.filter = "saturate(100%)";
        array_love[x].style.visibility = "hidden";
        array_hate[x].style.visibility = "hidden";
        array[x].style.opacity = "1"


    })

    array_love[x].addEventListener("click", () => {
        bot = array[x].src
        tops = array[x - 1].src
        array[x - 1].src = bot
        array[x].src = tops
    })

    array_hate[x].addEventListener("click", () => {
        bot = array[x + 1].src
        tops = array[x].src
        array[x + 1].src = tops
        array[x].src = bot
    })

}