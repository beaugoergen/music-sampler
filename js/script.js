// variables
let music = document.querySelectorAll('.music');
let albumCover = document.querySelectorAll('.albumcover');
let players = document.querySelectorAll('audio');
var a = document.getElementById("betteraudio");
var b = document.getElementById("danceaudio");
var c = document.getElementById("fineaudio");
var d = document.getElementById("pushaudio");





// hide music players
function hideAll() {
  music.forEach(function(el) {
    el.style.display = 'none';
  });
}
hideAll();



// when album cover is clicked, correct div appears
albumCover.forEach(function(el) {
  el.onclick = (e) => {

hideAll();



// make other songs stop playing when click on another
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });



// switch
  switch (e.target.getAttribute('id')) {
    case 'mlp':
      document.querySelector('#betterbeen')
      .style.display = 'block';
      break;
    case 'rep':
      document.querySelector('#danceme')
      .style.display = 'block';
      break;
    case 'silp':
      document.querySelector('#finedie')
      .style.display = 'block';
      break;
    case 'gwpp':
      document.querySelector('#pushon')
      .style.display = 'block';
      break;
  }
}
});
