"use strict";
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  let dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

function playMusicHover(){
  let music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu popup.mp3');
  music.play();
  }


function PlayMusicFinishedHTML(x){
  let music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
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

let mainBackgroundTexture = document.getElementById("main");

function background1() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../images/Background_Tiles/5003.gif)";
  mainBackgroundTexture.style.color = "black";
  return mainBackgroundTexture.style;
}

function background2() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../images/Background_Tiles/Black.gif)";
  mainBackgroundTexture.style.color = "white";
  return mainBackgroundTexture.style;
}

function background3() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../images/Background_Tiles/Blue.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

function background4() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../images/Background_Tiles/YellowLight.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

function background5() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../images/Background_Tiles/wrinkled-paper-texture_1100-12.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

function background6() {
  mainBackgroundTexture.style.backgroundImage = "url(../../../images/Background_Tiles/orange_paper.gif)";
  mainBackgroundTexture.style.color = "Black";
  return mainBackgroundTexture.style;
}

let hideSideNavS = document.getElementById("side");
let hideSideNavM = document.getElementById("main");
let hideSideNavB = document.getElementById("hideAndShowSideNav");

function sideNav() {
  if (hideSideNavB.innerText == "Κρύψε την πλαϊνή μπάρα") {
    hideSideNavS.style.display = "none";
    hideSideNavB.innerText = "Εμφάνισε την πλαϊνή μπάρα";
    hideSideNavM.style.left = "0px";
  } else {
      hideSideNavS.style.display = "block";
      hideSideNavB.innerText = "Κρύψε την πλαϊνή μπάρα";
      hideSideNavM.style.left = "300px";
  }
}