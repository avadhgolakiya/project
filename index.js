let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice");
let menuiconbox = document.getElementById("menu-icon-box");
let menu = document.getElementById("menu");
let ul = document.querySelector("ul");
let close = document.getElementById("close")


menu.addEventListener("click", ()=>{
    ul.style.left = "0px";
    menu.style.display = "none";
    close.style.display = "block";
});
close.addEventListener("click", () =>{
    ul.style.left = "-100%";
    menu.style.display = "block";
    close.style.display = "none";
})
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1// It controls how fast the voice speaks.
    text_speak.pitch=1  //It controls the tone (high or low) of the voice.
    text_speak.volume=1 // It controls the voice loudness.
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak);
}
function wishMe(){
    let now = new Date();
    let hours = now.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir");
    }else{
        speak("Good Evening Sir")
    }
}
// window.addEventListener('load', ()=>{
//     wishMe();
// });

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult = (event) =>{
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript
    // console.log(event);
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", ()=>{
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block"

})
voice.addEventListener("click", ()=>{
        btn.style.display = "flex";
    voice.style.display = "none"
})
function takeCommand(message){
    btn.style.display = "flex";
    voice.style.display = "none"
    
    if(message.includes("hello") ||message.includes("hey")){
        speak("hello sir what can i help you ?")
    }else if(message.includes("who are you")){
        speak("i am virtual assistant, created by avadh sir");
    }else if(message.includes("open youtube")){
        speak("opening you tube")
        window.open("https://www.youtube.com/", "_blank")
    }else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/", "_blank")
    }else if(message.includes("open instagram")){
        speak("opening instagram.")
        window.open("https://www.instagram.com/", "_blank")
    }else{
        let finalText = "this is what i found on internet regarding the "+ message.replace(" hello shifra", "") || message.replace("hey shipra", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shifra", "") || message.replace("shipra", "")}`, "_blank")
    }
}


