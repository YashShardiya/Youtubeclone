var menuIcon= document.querySelector(".menuicon");

var sidebar = document.querySelector(".sidebar");

var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}



