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
