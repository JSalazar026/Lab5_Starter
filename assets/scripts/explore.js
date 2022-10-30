// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let synth = window.speechSynthesis;
  let utterance = document.getElementById('text-to-speak');
  let voiceOptions = document.getElementById('voice-select');
  let playVoiceButton = document.querySelector('button');
  let imgFile = document.getElementsByTagName('img');
  let voices = [];

  window.addEventListener('load', function() {
    voices = synth.getVoices();
    for(let index = 0; index < voices.length; index++) {
      let option = document.createElement('option');
      option.textContent = `${voices[index].name} (${voices[index].lang})`;

      option.setAttribute('data-lang', voices[index].lang);
      option.setAttribute('data-name', voices[index].name);
      voiceOptions.appendChild(option);
    }
  })

  playVoiceButton.addEventListener('click', function() {
    const utterPhrase = new SpeechSynthesisUtterance(utterance.value);
    const selectedVoice = voiceOptions.selectedOptions[0].getAttribute('data-name');
    for (let index = 0; index < voices.length ; index++) {
      if (voices[index].name === selectedVoice)
        utterPhrase.voice = voices[index];
    }
    synth.speak(utterPhrase);
    utterPhrase.addEventListener('start', function(){
      imgFile[0].src = "assets/images/smiling-open.png";
    })
    utterPhrase.addEventListener('end', function(){
      imgFile[0].src = "assets/images/smiling.png";
    })
  })
}