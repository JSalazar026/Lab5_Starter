// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornType = document.getElementById('horn-select');
  let audioFile = document.getElementsByClassName('hidden');
  let imgFile = document.getElementsByTagName('img');
  let volumeSlider = document.getElementById('volume');
  let playSoundButton = document.querySelector('button');
  let confetti = new JSConfetti();

  hornType.addEventListener('change', function(event) {
    if(event.target.value === "air-horn")
    {
      imgFile[0].src = "assets/images/air-horn.svg";
      audioFile[0].src = "assets/audio/air-horn.mp3";
    }
    else if(event.target.value === "car-horn")
    {
      imgFile[0].src = "assets/images/car-horn.svg";
      audioFile[0].src = "assets/audio/car-horn.mp3";
    }
    else if(event.target.value === "party-horn")
    {
      imgFile[0].src = "assets/images/party-horn.svg";
      audioFile[0].src = "assets/audio/party-horn.mp3";
    }
  })
  volumeSlider.addEventListener('input', function(event) {
    if(event.target.value === 0)
    {
      imgFile[1].src = "assets/icons/volume-level-0.svg";
      audioFile[0].volume = 0;
    }
    else if(event.target.value < 33)
    {
      imgFile[1].src = "assets/icons/volume-level-1.svg";
      audioFile[0].volume = event.target.value/100;
    }
    else if(event.target.value < 67)
    {
      imgFile[1].src = "assets/icons/volume-level-2.svg";
      audioFile[0].volume = event.target.value/100;
    }
    else
    {
      imgFile[1].src = "assets/icons/volume-level-3.svg";
      audioFile[0].volume = event.target.value/100;
    }
  })

  playSoundButton.addEventListener('click', function(){
    audioFile[0].play();
    confetti.addConfetti();
    if(audioFile[0].src === "assets/audio/party-horn.mp3") {
      startConfetti();
    }
  })

}