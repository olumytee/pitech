// listen for mobile nav clicks
document.getElementById("nav-toggle").addEventListener ("click", toggleNav);

//  function to toggle Nav

function toggleNav() {
                var nav = document.getElementById("nav-menu");
                var className = nav.getAttribute("class");
                if(className == "nav-right nav-menu") {
                    nav.className = "nav-right nav-menu is-active";
                } else {
                    nav.className = "nav-right nav-menu";
                }
}
