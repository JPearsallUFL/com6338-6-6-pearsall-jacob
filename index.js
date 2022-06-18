var button = document.querySelector('.hamburger-btn')
var list = document.querySelector('.hamburger-menu')
var menu = document.querySelector('.menu')

//When hamburger is clicked open/close the menu
button.onclick = showHide
function showHide(e){
    if (!list.classList.contains("show-menu")) {
        show()
    } else {
        hide()
    }
}

//Clicking outside of hamburger window closes menu
document.body.onclick = function(e) {
    if (!menu.contains(e.target)){
        hide()
    }
}

//Pressing escape should close the hamburger menu and focus button
document.onkeyup = function(e) {
    if (e.key === "Escape"){
        hide()
    }
}

//Nested Functions
function show(e){
    list.classList.toggle("show-menu")
    button.setAttribute("aria-expanded", true)
}

function hide(e){
    list.classList.remove("show-menu")
    button.setAttribute("aria-expanded", false)
    button.focus()
}