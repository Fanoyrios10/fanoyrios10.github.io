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
  var music = new Audio('audio/Wimdows Sounds/Windows 98/Windows 98 menu popup.mp3');
  music.play();
  }
  function playMusic2(){
    var music = new Audio('audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
    music.play();
    }
    function playMusic1974(){
      var music = new Audio('audio/Wimdows Sounds/Windows 98/Windows 98 menu command.mp3');
      music.play();
      setTimeout(function () {
        location.href = "Home-page-gr.html";
    }, 1000);
      }