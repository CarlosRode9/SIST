document.getElementById("btn_open").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_move");
}

if (window.innerWidth < 750){

    body.classList.add("body_move");
    side_menu.classList.add("menu_move");
}

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menumove");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu_move");
    }

});