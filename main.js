
// dodati novi HTML element i u njega prilikom otvaranja upisati Hello world
// i kod zatvaranja da se obriše


let toggleNavStatus = false; /* dali je otvoreni izbornik ili ne */

let toggleNav = function(){
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarTitle = document.querySelector(".nav-sidebar ul li span");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul li a"); /*sve linkove u asidu pobrati*/

  if (toggleNavStatus === false) {
    document.getElementById("tekst").innerText = "Hello JavaScript!";

    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "272px";
    getSidebarTitle.style.opacity = "0,5";

    let arrayLenght = getSidebarLinks.length;
    for (let i = 0; i < arrayLenght; i++) {
      console.log(getSidebarLinks[i],"i")
      getSidebarLinks[i].style.opacity = "1";

    }

    toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    document.getElementById("tekst").innerText = "";

    getSidebar.style.width = "50px";
    getSidebarTitle.style.opacity = "0";

    let arrayLenght = getSidebarLinks.length;
    for (let i = 0; i < arrayLenght; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
  }
}
