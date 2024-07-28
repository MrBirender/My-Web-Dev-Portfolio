let text = document.querySelector("textarea");
let button = document.getElementById("listenbtn");
let speech = new SpeechSynthesisUtterance()

button.addEventListener("click", () => {
    speech.text = text.value;
    window.speechSynthesis.speak(speech)
})

let select = document.querySelector("select");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach(function(voice, index){
        select.options[index] = new Option(voice.name, index) 
    })

}

select.addEventListener("change", () => {
    speech.voice = voices[select.value]
})