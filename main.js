var modal = document.getElementById("modal")

var button = document.getElementsByClassName("button")

var span = document.getElementsByClassName("close") [0]

button.onclick = function() {
    modal.style.display = "block"
    
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}