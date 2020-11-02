"use strict";

// loop that allows the dropdown menu on click in the sidenav plus the color animation
let dropdown = document.getElementsByClassName("dropdown-btn");
let dropdownConteiner = document.getElementsByClassName("dropdown-container");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  let dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  dropdownConteiner.style.transition = "1s";
  dropdown.style.transition = "1s";
  } else {
  dropdownContent.style.display = "block";
  dropdownConteiner.style.transition = "1s";
  dropdown.style.transition = "1s";
  }
  });
}

//function that plays the sound when you hover over a button in the sidenav and the navbar
function playMusicHover(){
  let music = new Audio('../../../Audio/Windows_Sounds/Windows_98/Windows_98_menu_popup.mp3');
  music.play();
  }

//function that plays music and directs you to a website when you click on a link in the sidenav and the navbar
function PlayMusicFinishedHTML(x){
  let music = new Audio('../../../Audio/Windows_Sounds/Windows_98/Windows_98_menu_command.mp3');
  music.play();
  if (x === "Home") {
      setTimeout(function () {
      location.href = "Home-page-gr.html";
      }, 500);
  } else if (x === "Windows DR5") {
    setTimeout(function () {
      location.href = "Windows-1.0-DR5-gr.html";
      }, 500);
  } else if (x === "Windows PRE") {
    setTimeout(function () {
      location.href = "Windows-Premiere-Edition-gr.html";
      }, 500);
  } else if (x === "Windows 1.04") {
    setTimeout(function () {
      location.href = "Windows-1.04-gr.html";
      }, 500);
  } else if (x === "Windows PCem") {
    setTimeout(function () {
      location.href = "PCem-Setup-gr.html";
      }, 500);
  } else if (x === "UC") {
    setTimeout(function () {
      location.href = "../../under_construction.html";
      }, 500);
  } else if (x === "Index") {
    setTimeout(function () {
      location.href = "../../../index.html";
      }, 500);
  }
}

// function that makes the go to top button appear as soon as you begin scrolling downwards
let mybutton = document.getElementById("GoToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//functions that change the background of main when you click on the buckground buttons
let mainBackgroundTexture = document.getElementById("main");

function background1() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../Images/Background_Tiles/5003.gif)";
  mainBackgroundTexture.style.color = "black";
  return mainBackgroundTexture.style;
}

function background2() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../Images/Background_Tiles/Black.gif)";
  mainBackgroundTexture.style.color = "white";
  return mainBackgroundTexture.style;
}

function background3() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../Images/Background_Tiles/Blue.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

function background4() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../Images/Background_Tiles/YellowLight.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

function background5() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../Images/Background_Tiles/wrinkled-paper-texture_1100-12.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

function background6() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../Images/Background_Tiles/orange_paper.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

//function that hides and shows the sidenav when you click on the hide and show sidenav button
let hideSideNavS = document.getElementById("side");
let hideSideNavM = document.getElementById("main");
let hideSideNavB = document.getElementById("hideAndShowSideNav");

function sideNav() {
  if (hideSideNavB.innerText == "Κρύψε την πλαϊνή μπάρα") {
    hideSideNavS.style.display = "none";
    hideSideNavB.innerText = "Εμφάνισε την πλαϊνή μπάρα";
    hideSideNavM.style.left = "0px";
    hideSideNavS.style.transition = "1s";
    hideSideNavM.style.transition = "1s";
  } else {
      hideSideNavS.style.display = "block";
      hideSideNavB.innerText = "Κρύψε την πλαϊνή μπάρα";
      hideSideNavM.style.left = "300px";
  }
}
