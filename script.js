let speech=new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices= window.speechSynthesis.getVoices();//to get all voices on my device
    speech.voice=voices[0];//by default speak 1st voice of device

    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
};
voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})