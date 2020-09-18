var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

function playMusic(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu popup.mp3');
  music.play();
  }

function playMusic2(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  }

function playMusic1974(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  setTimeout(function () {
    location.href = "Home-page-gr.html";
    }, 500);
  }

function playMusicWindowsDR5(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  setTimeout(function () {
    location.href = "Windows-1.0-DR5-gr.html";
    }, 500);
  }

function playMusicWindowsPR(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  setTimeout(function () {
    location.href = "Windows-Premiere-Edition-gr.html";
    }, 500);
  }

function playMusicWindows104(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  setTimeout(function () {
    location.href = "Windows-1.04-gr.html";
    }, 500);
}

function playMusicPCem(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  setTimeout(function () {
    location.href = "PCem-Setup-gr.html";
    }, 500);
}

function playMusicUnderConstruction(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  setTimeout(function () {
    location.href = "../../under_construction.html";
    }, 500);
}

function playMusicIndex(){
  var music = new Audio('../../../audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
  music.play();
  setTimeout(function () {
    location.href = "../../../index.html";
    }, 500);
}

var mybutton = document.getElementById("GoToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var x = document.getElementById("Texture");
var y = document.getElementById("Texture");


function background1() {
  x.style.backgroundImage = "url(../../../images/Background_Tiles/5003.gif)";
  x.style.color = "black";
  return x.style;
}

function background2() {
  x.style.backgroundImage = "url(../../../images/Background_Tiles/Black.gif)";
  x.style.color = "white";
  return x.style;
}

function background3() {
  x.style.backgroundImage = "url(../../../images/Background_Tiles/Blue.gif)";
  x.style.color = "Black";
  return x.style;
}

function background4() {
  x.style.backgroundImage = "url(../../../images/Background_Tiles/YellowLight.gif)";
  x.style.color = "Black";
  return x.style;
}

function background5() {
  x.style.backgroundImage = "url(../../../images/Background_Tiles/wrinkled-paper-texture_1100-12.gif)";
  x.style.color = "Black";
  return x.style;
}

function background6() {
  x.style.backgroundImage = "url(../../../images/Background_Tiles/orange_paper.gif)";
  x.style.color = "Black";
  return x.style;
}

setInterval(function store(){
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(y.style.backgroundImage,x.style.backgroundImage);
    document.getElementById("Texture").style.backgroundImage = localStorage.getItem(y.style.backgroundImage);
}
}, 1000);

console.log(x.style.backgroundImage);
console.log(y.style.backgroundImage);