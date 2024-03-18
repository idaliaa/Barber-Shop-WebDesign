
var menuBtn = document.getElementById("menu-btn");
        // class using querySelector
var sideNav = document.querySelector(".side-nav")
var menu = document.getElementById("menu");
sideNav.style.right == "-250px"

    function showMenu(){
        if(sideNav.style.right == "-250px"){
            sideNav.style.right = "0";
            menu.src = "images/close.png";
        } else {
            sideNav.style.right = "-250px";
            menu.src = "images/menu.png";
        }
    }

    
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true
    });
	var scroll = new SmoothScroll('a[href*="#"]');


