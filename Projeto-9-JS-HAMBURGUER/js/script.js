function toogleMenu () {
    var menu = document.getElementById("myLinks");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function closeMenu () {
    var menu = document.getElementById("myLinks");
    menu.style.display = "none";
}